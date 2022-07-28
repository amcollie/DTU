import * as yup from 'yup'
import setPath from 'set-value'

import normalize from './normalize-field'

const transform = (fields = []) => {
  const nested = {}

  const schema = fields.reduce((schema, f) => {
    if (Array.isArray(f)) {
      return Object.assign(schema, transform(f))
    }

    let handleRequireRule = true
    const { name, label, type, validators, required } = f

    if (
      f.heading
      || f.info
      || f.warning
      || f.spacer
      || (type && type != 'checkbox' && !yup[type])
    ) return schema

    let field = (type == 'checkbox' ? yup.bool : yup[type ?? 'string'])()
      .label(label)

    if (type == 'array') {
      const { min, max } = f
      const sub = transform(normalize(f.fields))

      field = field.of(yup.object(sub))
      if (min) field = field.min(min)
      if (max) field = field.max(max)
    }

    field = validators.reduce((rules, v) => {
      const [rule, ...params] = Array.isArray(v) ? v : v.split(':')

      if (rule == 'when') {
        handleRequireRule = false
        const [dependence, config, value] = params
        const noop = yup[type]().nullable().notRequired()

        let sub = (type == 'checkbox' ? yup.bool : yup[type ?? 'string'])()
          .label(label)

        sub = required === false
          ? sub.nullable().notRequired()
          : sub.nullable().required('Required')

        switch (config) {
          case 'is-true':
            return rules.when(dependence, {
              is: val => !!val,
              then: sub,
              otherwise: noop,
            })
          case 'is-false':
            return rules.when(dependence, {
              is: val => !val,
              then: sub,
              otherwise: noop,
            })
          case 'is':
            return rules.when(dependence, {
              is: val => val == value,
              then: sub,
              otherwise: noop,
            })
          case 'is-not':
            return rules.when(dependence, {
              is: val => val != value,
              then: sub,
              otherwise: noop,
            })
          default:
            return rules.when(dependence, config)
        }
      }

      if (!rules[rule]) return rules
      return rules[rule](...params)
    }, field)

    if (handleRequireRule) {
      field = required === false ? field : field.required('Required')
    }

    return Object.assign(schema, { [name]: field })
  }, {})

  for (let [key, shape] of Object.entries(nested)) {
    schema[key] = yup.object(shape)
  }

  return schema
}

export default (fields = []) => yup.object(transform(fields.map(normalize)))

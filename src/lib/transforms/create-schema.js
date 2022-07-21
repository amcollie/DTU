import * as yup from 'yup'
import setPath from 'set-value'

import normalize from './normalize-field'

const transform = (fields = []) => {
  const nested = {}

  const schema = fields.reduce((schema, f) => {
    if (Array.isArray(f)) {
      Object.assign(schema, transform(f))
      return schema
    }

    const { name, type, validators, required } = f
    if (f.heading || f.info || f.warning || (type && !yup[type])) return schema

    const final = validators.reduce((comp, v) => {
      const [type, ...params] = Array.isArray(v) ? v : v.split(':')
      if (!comp[type]) return comp
      return comp[type](...params)
    }, yup[type ?? 'string']().label(f.label))

    if (type == 'array') {
      const sub = transform(normalize(f.fields))
      schema[name] = final.of(yup.object(sub))
    }

    if (name.includes('.')) {
      setPath(nested, name, final)
      return schema
    }
    
    schema[name] = final

    if (required !== false) {
      schema[name] = schema[name].required('Required')
    }

    return schema
  }, {})

  for (let [key, shape] of Object.entries(nested)) {
    schema[key] = yup.object(shape)
  }

  return schema
}

export default (fields = []) => yup.object(transform(fields.map(normalize)))

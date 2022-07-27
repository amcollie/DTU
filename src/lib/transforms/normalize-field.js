const base = {
  type: 'string',
  required: true,
  validators: [],
  attributes: {},
}

const isAllowedType = str => {
  const all = 'email tel password'
  if (all.includes(str)) return str
  return null
}

const normalize = field => {
  if (Array.isArray(field)) return field.map(normalize)

  if (typeof field == 'string') {
    const f = field.trim()

    if (f.startsWith('::')) {
      return { heading: f.slice(2) }
    } else if (f.startsWith('i::')) {
      return { info: f.slice(3) }
    } else if (f.startsWith('w::')) {
      return { warning: f.slice(3) }
    } else if (f == 's::') {
      return { spacer: true }
    } else if (f.includes(':')) {
      const [name, label, optional] = f.split(':')
      return {
        ...base,
        name,
        as: isAllowedType(optional) ?? 'text',
        label: label || f.initialCaps(),
        required: optional != 'optional',
      }
    }

    return { ...base, name: field, label: field.initialCaps() }
  }

  const final = { ...base, ...field }

  if (field.heading == 'SPACER') {
    final.heading = '<span>&nbsp;</span>'
  }

  if (field.as == 'switch' || field.as == 'checkbox') {
    final.type = 'checkbox'
  }

  if (field.as == 'switch') {
    final.required = !!field.required || false
  }

  final.label = final.label ?? field.name?.initialCaps()
  return final
}

export default normalize

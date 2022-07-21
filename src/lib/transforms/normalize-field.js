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

const normalize = f => {
  if (Array.isArray(f)) return f.map(normalize)

  if (typeof f == 'string') {
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

    return { ...base, name: f, label: f.initialCaps() }
  }

  if (f.heading == 'SPACER') {
    f.heading = '<span>&nbsp;</span>'
  }

  if (f.as == 'switch') {
    f.type = 'boolean'
    f.required = !!f.required || false
  }
  
  if (f.as == 'checkbox') {
    f.type = 'boolean'
  }

  return {
    ...base,
    ...f,
    label: f.label ?? f.name?.initialCaps()
  }
}

export default normalize

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

  const final = { ...base, ...f }

  if (f.heading == 'SPACER') {
    final.heading = '<span>&nbsp;</span>'
  }

  if (f.as == 'switch' || f.as == 'checkbox') {
    final.type = 'checkbox'
  }

  if (f.as == 'switch') {
    final.required = !!f.required || false
  }

  final.label = final.label ?? f.name?.initialCaps()
  return final
}

export default normalize

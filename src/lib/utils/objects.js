export const extractKeys = (obj, ...keys) => {
  if (!obj || !keys?.length) return null

  const fn = keys.join('').includes(':')
    ? (o, k) => {
      const [key, alias] = k.split(':')
      const val = obj[key]

      return val === undefined ? o : {
        ...o,
        [alias || key]: val
      }
    }
    : (o, k) => {
      const val = obj[k]

      return val === undefined ? o : {
        ...o,
        [k]: val
      }
    }

  return keys.reduce(fn, {})
}

export const hasAnyKeys = (obj, ...keys) => keys.some(k => obj.hasOwnProperty(k))
export const hasAllKeys = (obj, ...keys) => keys.every(k => obj.hasOwnProperty(k))

export const listKeys = (obj, ...keys) => {
  if (!obj || !keys || !keys.length) return null

  const fn = (o, k) => [...o, obj[k]]

  return keys.reduce(fn, [])
}

export const withoutKeys = (obj, ...keys) => {
  if (!obj || !keys || !keys.length) return null

  const fn = (o, k) => {
    delete o[k]
    return o
  }

  return keys.reduce(fn, { ...obj })
}

export const getPath = (obj, path) => {
  const steps = path.split('.')
  let ref = obj

  try {
    for (let step of steps) {
      ref = ref[step]
    }
  } catch (err) {
    return undefined
  }

  return ref
}
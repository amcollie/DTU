// Only use 'fallback' if 'val' is undefined
const fallback = (val, fallback, allowNull = true) => {
  if (!allowNull && val === null) return fallback
  return val === undefined ? fallback : val
}

export default fallback

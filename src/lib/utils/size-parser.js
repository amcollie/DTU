const toBytes = str => {
  if (!str) return 0
  let [, num, unit] = str.match(/^(\d+)\s*?([kmg]b)$/i) ?? []
  if (!num || !unit) return 0

  const units = ['KB', 'MB', 'GB']
  const use = units.indexOf(unit.toUpperCase())

  return num * 1024 * 2 ** use
}
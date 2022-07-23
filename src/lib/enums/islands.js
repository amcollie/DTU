const islands = [
  'New Providence',
  'Grand Bahama',
  'Abaco',
  'Eleuthera',
  'Exuma',
  'Andros',
  'Berry Islands',
  'Bimini',
  'Acklins',
  'Mayaguana',
  'Cat Island',
  'Crooked Island',
  'Inagua',
  'Long Island',
  'Ragged Island',
  'Rum Cay',
  'San Salvador',
  'Long Cay',
  'Remote',
]

export const raw = islands
export default islands.map(i => ({ value: i, label: i }))

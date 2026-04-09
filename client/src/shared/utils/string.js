export const slugToString = (slug) => slug.split('-').join(' ')
export const capitalizeFirstChar = (str) => str[0].toUpperCase() + str.slice(1)
export const stringDashedToNormal = (str) => str.split('-').join(' ')
export const stringDashedToUnderscore = (str) => str.split('-').join('_')
export const clearObject = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([_, value]) => !!value))

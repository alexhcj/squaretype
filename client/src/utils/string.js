export const slugToString = (slug) => slug.split('-').join(' ')
export const capitalizeFirstChar = (str) => str[0].toUpperCase() + str.slice(1)
export const stringDashedToNormal = (str) => str.split('-').join(' ')
export const stringDashedToUnderscore = (str) => str.split('-').join('_')

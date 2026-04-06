export const buildQueryString = (params) => {
  const filtered = Object.entries(params).reduce((acc, [key, value]) => {
    // Only include if value is not null, undefined, or empty string
    if (value !== null && value !== undefined && value !== '') {
      acc[key] = value
    }
    return acc
  }, {})
  
  return new URLSearchParams(filtered).toString()
}
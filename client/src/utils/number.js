export const divideNumber = (n) => {
  return Math.abs(n) > 999 ? Math.sign(n) * (Math.abs(n) / 1000).toFixed(1) + 'K' : Math.sign(n) * Math.abs(n)
}

export function isYearLeap(date: Date) {
  const year = date.getFullYear()

  if (year % 4 === 0 && year % 100 !== 0) return true

  return false
}

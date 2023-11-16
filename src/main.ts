const isDivisibleByFour = (year: number) => year % 4 === 0
const isDivisibleByOneHundred = (year: number) => year % 100 === 0

export function isYearLeap(date: Date) {
  const year = date.getFullYear()

  if (isDivisibleByFour(year) && !isDivisibleByOneHundred(year)) return true
  if (isDivisibleByOneHundred(year) && year % 400 === 0) return true

  return false
}

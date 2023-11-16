const isDivisibleByFour = (year: number) => year % 4 === 0
const isntDivisibleByOneHundred = (year: number) => year % 100 !== 0

export function isYearLeap(date: Date) {
  const year = date.getFullYear()

  if (isDivisibleByFour(year) && isntDivisibleByOneHundred(year)) return true
  if (isntDivisibleByOneHundred(year)) return true

  return false
}

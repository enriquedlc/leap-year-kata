import { describe, it, expect } from "vitest"

import { isYearLeap } from "./main.js"

describe("Default test", () => {
  it("shouldn't be leap if isn't divisible by 4", () => {
    const actualDate = new Date(Date.now())

    const result = isYearLeap(actualDate)

    expect(result).toBe(false)
  })

  it("should be leap if is not divisible by 100", () => {
    const actualDate = new Date(Date.now())

    const result = isYearLeap(actualDate)

    expect(result).toBe(true)
  })
})

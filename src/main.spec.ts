import { describe, it, expect } from "vitest"

import { isYearLeap } from "./main.js"

/**
 * [2021] (is not divisible by 4) => false
 * [2022] (is divisible by 4 but not by 100) => true
 * [2020] (is divisible by 4 and 400 but not by 100) => true
 * [2000] (is divisible 400 and 100) => true
 */

describe("Default test", () => {
  it("shouldn't be leap if isn't divisible by 4", () => {
    const actualDate = new Date(Date.parse("2023"))

    const result = isYearLeap(actualDate)

    expect(result).toBe(false)
  })

  it("should be leap if is not divisible by 100", () => {
    const actualDate = new Date(Date.parse("2020"))

    const result = isYearLeap(actualDate)

    expect(result).toBe(true)
  })

  it("should be leap if it's divisible by 400 and 100", () => {
    const actualDate = new Date(Date.parse("800"))

    const result = isYearLeap(actualDate)

    expect(result).toBe(true)
  })
})

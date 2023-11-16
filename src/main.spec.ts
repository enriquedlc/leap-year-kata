import { describe, it, expect } from "vitest"

import { isYearLeap } from "./main.js"

describe("Default test", () => {
  it("should return false if number is negativee", () => {
    const result = isYearLeap(-5)

    expect(result).toBe(false)
  })
})

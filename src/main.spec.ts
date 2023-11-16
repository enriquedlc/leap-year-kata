import { describe, it, expect } from "vitest"

import { isYearLeap } from "./main.js"

describe("Default test", () => {
  it("should return true if is divisible by 4", () => {
    const result = isYearLeap(new Date())

    expect(result).toBe(true)
  })
})

import { describe, expect, it } from "vitest";
import { DateString } from "../date-string.js";

describe("DateString", () => {
  const validator = new DateString();

  it("accepts a valid date string", () => {
    expect(validator.validateValue("2026-11-06").valid).toBe(true);
  });

  it("accepts a global date-time string with colon offset", () => {
    expect(validator.validateValue("2026-11-06T14:30+01:00").valid).toBe(true);
  });

  it("accepts a global date-time string with colon-less offset", () => {
    expect(validator.validateValue("2026-11-06T14:30+0100").valid).toBe(true);
  });

  it("accepts Z offset", () => {
    expect(validator.validateValue("2026-11-06T14:30Z").valid).toBe(true);
  });

  it("rejects year 0000", () => {
    expect(validator.validateValue("0000-11-06").valid).toBe(false);
  });

  it("rejects an invalid month", () => {
    expect(validator.validateValue("2026-13-06").valid).toBe(false);
  });

  it("rejects a month-only string (not a date string)", () => {
    expect(validator.validateValue("2026-11").valid).toBe(false);
  });
});

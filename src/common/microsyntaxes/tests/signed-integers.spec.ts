import { describe, it, expect } from "vitest";
import { SignedIntegers } from "../signed-integers";

describe("SignedIntegers", () => {
  const validator = new SignedIntegers();

  describe("valid integers", () => {
    it("should accept positive integers", () => {
      expect(validator.validate("0")).toEqual({ success: true });
      expect(validator.validate("1")).toEqual({ success: true });
      expect(validator.validate("123")).toEqual({ success: true });
      expect(validator.validate("999999")).toEqual({ success: true });
    });

    it("should accept negative integers with hyphen-minus", () => {
      expect(validator.validate("-1")).toEqual({ success: true });
      expect(validator.validate("-123")).toEqual({ success: true });
      expect(validator.validate("-999999")).toEqual({ success: true });
      expect(validator.validate("-0")).toEqual({ success: true });
    });

    it("should accept integers with leading zeros", () => {
      expect(validator.validate("00123")).toEqual({ success: true });
      expect(validator.validate("-00456")).toEqual({ success: true });
    });
  });

  describe("invalid values", () => {
    it("should reject null values", () => {
      const result = validator.validate(null);
      expect(result.success).toBe(false);
      expect(result.message).toBe("Value must be a string");
    });

    it("should reject boolean values", () => {
      const result = validator.validate(true);
      expect(result.success).toBe(false);
      expect(result.message).toBe("Value must be a string");
    });

    it("should reject empty strings", () => {
      const result = validator.validate("");
      expect(result.success).toBe(false);
      expect(result.message).toContain("Invalid signed integer");
    });

    it("should reject strings with whitespace", () => {
      const result1 = validator.validate("   ");
      expect(result1.success).toBe(false);
      expect(result1.message).toContain("Invalid signed integer");

      const result2 = validator.validate(" 123");
      expect(result2.success).toBe(false);
      expect(result2.message).toContain("Invalid signed integer");

      const result3 = validator.validate("123 ");
      expect(result3.success).toBe(false);
      expect(result3.message).toContain("Invalid signed integer");
    });

    it("should reject strings with only hyphen-minus", () => {
      const result = validator.validate("-");
      expect(result.success).toBe(false);
      expect(result.message).toContain("Invalid signed integer");
    });

    it("should reject strings with plus sign", () => {
      const result1 = validator.validate("+123");
      expect(result1.success).toBe(false);
      expect(result1.message).toContain("Invalid signed integer");

      const result2 = validator.validate("+");
      expect(result2.success).toBe(false);
      expect(result2.message).toContain("Invalid signed integer");
    });

    it("should reject strings starting with non-digit characters", () => {
      const result1 = validator.validate("abc");
      expect(result1.success).toBe(false);
      expect(result1.message).toContain("Invalid signed integer");

      const result2 = validator.validate("x123");
      expect(result2.success).toBe(false);
      expect(result2.message).toContain("Invalid signed integer");
    });

    it("should reject strings with hyphen-minus followed by non-digit", () => {
      const result = validator.validate("-abc");
      expect(result.success).toBe(false);
      expect(result.message).toContain("Invalid signed integer");
    });

    it("should reject strings with trailing non-digit characters", () => {
      const result1 = validator.validate("123abc");
      expect(result1.success).toBe(false);
      expect(result1.message).toContain("Invalid signed integer");

      const result2 = validator.validate("456xyz");
      expect(result2.success).toBe(false);
      expect(result2.message).toContain("Invalid signed integer");
    });

    it("should reject strings with multiple hyphen-minus", () => {
      const result = validator.validate("--123");
      expect(result.success).toBe(false);
      expect(result.message).toContain("Invalid signed integer");
    });
  });

  describe("edge cases", () => {
    it("should handle very large numbers", () => {
      expect(validator.validate("999999999999999999")).toEqual({
        success: true,
      });
      expect(validator.validate("-999999999999999999")).toEqual({
        success: true,
      });
    });
  });
});

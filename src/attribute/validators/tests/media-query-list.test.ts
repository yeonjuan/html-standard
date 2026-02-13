import { describe, it, expect } from "vitest";
import { MediaQueryList } from "../media-query-list.js";
import { ERROR_MESSAGES } from "../error-messages.js";

describe("MediaQueryList", () => {
  const validator = new MediaQueryList();

  describe("valid media queries", () => {
    it("should validate simple media query", () => {
      const result = validator.validateValue("screen");
      expect(result.valid).toBe(true);
    });

    it("should validate media query with feature", () => {
      const result = validator.validateValue("(min-width: 768px)");
      expect(result.valid).toBe(true);
    });

    it("should validate media type with feature", () => {
      const result = validator.validateValue("screen and (min-width: 768px)");
      expect(result.valid).toBe(true);
    });

    it("should validate multiple media queries", () => {
      const result = validator.validateValue(
        "screen and (min-width: 768px), print",
      );
      expect(result.valid).toBe(true);
    });

    it("should validate complex media query", () => {
      const result = validator.validateValue(
        "(min-width: 768px) and (max-width: 1024px)",
      );
      expect(result.valid).toBe(true);
    });
  });

  describe("invalid media queries", () => {
    it("should invalidate malformed media query", () => {
      const result = validator.validateValue("screen and (");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate invalid syntax", () => {
      const result = validator.validateValue("screen and ()");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate unclosed parenthesis", () => {
      const result = validator.validateValue("(min-width: 768px");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate invalid operator", () => {
      const result = validator.validateValue("screen or (min-width: 768px)");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate missing value in feature", () => {
      const result = validator.validateValue("(min-width:)");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate extra closing parenthesis", () => {
      const result = validator.validateValue("(min-width: 768px))");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate invalid media type", () => {
      const result = validator.validateValue("123screen");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate double 'and' operators", () => {
      const result = validator.validateValue(
        "screen and and (min-width: 768px)",
      );
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate trailing 'and'", () => {
      const result = validator.validateValue("screen and");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate leading 'and'", () => {
      const result = validator.validateValue("and (min-width: 768px)");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate trailing comma", () => {
      const result = validator.validateValue("screen,");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate double commas", () => {
      const result = validator.validateValue("screen,, print");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });

    it("should invalidate incomplete feature query", () => {
      const result = validator.validateValue("(min-width");
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.reason).toBe(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }
    });
  });
});

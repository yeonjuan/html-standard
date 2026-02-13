import { describe, expect, it } from "vitest";
import { ValidURL } from "../valid-url.js";

describe("ValidURL", () => {
  const validator = new ValidURL({
    nonEmpty: false,
    potentiallySurroundedBySpaces: false,
  });

  describe("valid URLs", () => {
    it("should accept empty string (relative URL)", () => {
      const result = validator.validateValue("");
      expect(result.valid).toBe(true);
    });

    it("should accept absolute HTTP URLs", () => {
      const result = validator.validateValue("https://example.com");
      expect(result.valid).toBe(true);
    });

    it("should accept absolute HTTP URLs with path", () => {
      const result = validator.validateValue(
        "https://example.com/path/to/page",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept absolute HTTP URLs with query string", () => {
      const result = validator.validateValue(
        "https://example.com/search?q=test&lang=en",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept absolute HTTP URLs with hash", () => {
      const result = validator.validateValue(
        "https://example.com/page#section",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept absolute HTTP URLs with port", () => {
      const result = validator.validateValue("https://example.com:8080/path");
      expect(result.valid).toBe(true);
    });

    it("should accept absolute HTTP URLs with authentication", () => {
      const result = validator.validateValue("https://user:pass@example.com");
      expect(result.valid).toBe(true);
    });

    it("should accept FTP URLs", () => {
      const result = validator.validateValue("ftp://ftp.example.com/file.txt");
      expect(result.valid).toBe(true);
    });

    it("should accept mailto URLs", () => {
      const result = validator.validateValue("mailto:user@example.com");
      expect(result.valid).toBe(true);
    });

    it("should accept tel URLs", () => {
      const result = validator.validateValue("tel:+1-234-567-8900");
      expect(result.valid).toBe(true);
    });

    it("should accept data URLs", () => {
      const result = validator.validateValue(
        "data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept relative URLs with path", () => {
      const result = validator.validateValue("/path/to/page");
      expect(result.valid).toBe(true);
    });

    it("should accept relative URLs with query", () => {
      const result = validator.validateValue("?query=test");
      expect(result.valid).toBe(true);
    });

    it("should accept relative URLs with hash", () => {
      const result = validator.validateValue("#section");
      expect(result.valid).toBe(true);
    });

    it("should accept relative URLs without leading slash", () => {
      const result = validator.validateValue("page.html");
      expect(result.valid).toBe(true);
    });

    it("should accept relative URLs with ../", () => {
      const result = validator.validateValue("../parent/page.html");
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with encoded characters", () => {
      const result = validator.validateValue(
        "https://example.com/path%20with%20spaces",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with international characters", () => {
      const result = validator.validateValue("https://例え.jp/パス");
      expect(result.valid).toBe(true);
    });

    it("should accept file URLs", () => {
      const result = validator.validateValue("file:///path/to/file.txt");
      expect(result.valid).toBe(true);
    });

    it("should accept blob URLs", () => {
      const result = validator.validateValue(
        "blob:https://example.com/550e8400-e29b-41d4-a716-446655440000",
      );
      expect(result.valid).toBe(true);
    });
  });

  describe("invalid URLs", () => {
    it("should reject non-string values", () => {
      const result = validator.validateValue(123 as any);
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("Value must be a string");
    });

    it("should reject URLs with unencoded spaces", () => {
      const result = validator.validateValue(
        "https://example.com/path with spaces",
      );
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });

    it("should reject URLs with control characters", () => {
      const result = validator.validateValue(
        "https://example.com/path\x00test",
      );
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });

    it("should reject URLs with newline characters", () => {
      const result = validator.validateValue("https://example.com/path\ntest");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });

    it("should reject URLs with tab characters", () => {
      const result = validator.validateValue("https://example.com/path\ttest");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });

    it("should reject URLs with DEL character", () => {
      const result = validator.validateValue(
        "https://example.com/path\x7Ftest",
      );
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });
  });

  describe("edge cases", () => {
    it("should accept single character paths", () => {
      const result = validator.validateValue("a");
      expect(result.valid).toBe(true);
    });

    it("should accept query-only URLs", () => {
      const result = validator.validateValue("?");
      expect(result.valid).toBe(true);
    });

    it("should accept hash-only URLs", () => {
      const result = validator.validateValue("#");
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with special characters in query", () => {
      const result = validator.validateValue("?key=value&foo=bar!@$*()");
      expect(result.valid).toBe(true);
    });

    it("should accept localhost URLs", () => {
      const result = validator.validateValue("http://localhost:3000");
      expect(result.valid).toBe(true);
    });

    it("should accept IP address URLs", () => {
      const result = validator.validateValue("http://192.168.1.1:8080");
      expect(result.valid).toBe(true);
    });

    it("should accept IPv6 URLs", () => {
      const result = validator.validateValue("http://[::1]:8080");
      expect(result.valid).toBe(true);
    });
  });

  describe("options: nonEmpty", () => {
    const nonEmptyValidator = new ValidURL({
      nonEmpty: true,
      potentiallySurroundedBySpaces: false,
    });

    it("should reject empty string when nonEmpty is true", () => {
      const result = nonEmptyValidator.validateValue("");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("Value cannot be empty");
    });

    it("should accept non-empty URLs when nonEmpty is true", () => {
      const result = nonEmptyValidator.validateValue("https://example.com");
      expect(result.valid).toBe(true);
    });

    it("should accept empty string when nonEmpty is false (default)", () => {
      const defaultValidator = new ValidURL({
        nonEmpty: false,
        potentiallySurroundedBySpaces: false,
      });
      const result = defaultValidator.validateValue("");
      expect(result.valid).toBe(true);
    });
  });

  describe("options: potentiallySurroundedBySpaces", () => {
    const spacesValidator = new ValidURL({
      nonEmpty: false,
      potentiallySurroundedBySpaces: true,
    });

    it("should accept URLs with leading spaces when option is true", () => {
      const result = spacesValidator.validateValue("  https://example.com");
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with trailing spaces when option is true", () => {
      const result = spacesValidator.validateValue("https://example.com  ");
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with both leading and trailing spaces when option is true", () => {
      const result = spacesValidator.validateValue("  https://example.com  ");
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with tabs when option is true", () => {
      const result = spacesValidator.validateValue(
        "\t\thttps://example.com\t\t",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with mixed ASCII whitespace when option is true", () => {
      const result = spacesValidator.validateValue(
        " \t\n\r\fhttps://example.com \t\n\r\f",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept relative URLs with surrounding spaces when option is true", () => {
      const result = spacesValidator.validateValue("  /path/to/page  ");
      expect(result.valid).toBe(true);
    });

    it("should reject URLs with spaces when option is false (default)", () => {
      const defaultValidator = new ValidURL({
        nonEmpty: false,
        potentiallySurroundedBySpaces: false,
      });
      const result = defaultValidator.validateValue("  https://example.com  ");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });

    it("should still reject URLs with internal spaces even when option is true", () => {
      const result = spacesValidator.validateValue(
        "https://example.com/path with spaces",
      );
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("URL contains invalid characters");
    });
  });

  describe("options: combined", () => {
    const combinedValidator = new ValidURL({
      nonEmpty: true,
      potentiallySurroundedBySpaces: true,
    });

    it("should reject empty string with surrounding spaces when nonEmpty is true", () => {
      const result = combinedValidator.validateValue("   ");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("Value cannot be empty");
    });

    it("should accept valid URL with surrounding spaces when both options are true", () => {
      const result = combinedValidator.validateValue("  https://example.com  ");
      expect(result.valid).toBe(true);
    });

    it("should strip spaces before checking nonEmpty", () => {
      const result = combinedValidator.validateValue("  /relative/path  ");
      expect(result.valid).toBe(true);
    });
  });
});

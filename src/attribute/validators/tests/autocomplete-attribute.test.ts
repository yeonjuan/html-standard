import { describe, it, expect } from "vitest";
import { AutocompleteAttribute } from "../autocomplete-attribute.js";

describe("AutocompleteAttribute", () => {
  const validator = new AutocompleteAttribute();

  describe("simple on/off values", () => {
    it("should accept 'on'", () => {
      const result = validator.validate("on");
      expect(result.valid).toBe(true);
    });

    it("should accept 'off'", () => {
      const result = validator.validate("off");
      expect(result.valid).toBe(true);
    });

    it("should accept 'ON' (case insensitive)", () => {
      const result = validator.validate("ON");
      expect(result.valid).toBe(true);
    });
  });

  describe("autofill field names", () => {
    it("should accept valid field name", () => {
      const result = validator.validate("email");
      expect(result.valid).toBe(true);
    });

    it("should accept username", () => {
      const result = validator.validate("username");
      expect(result.valid).toBe(true);
    });

    it("should accept cc-number", () => {
      const result = validator.validate("cc-number");
      expect(result.valid).toBe(true);
    });

    it("should reject invalid field name", () => {
      const result = validator.validate("invalid-field");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid autofill field name");
    });
  });

  describe("section prefix", () => {
    it("should accept section-* prefix", () => {
      const result = validator.validate("section-blue email");
      expect(result.valid).toBe(true);
    });

    it("should accept section with shipping", () => {
      const result = validator.validate("section-red shipping street-address");
      expect(result.valid).toBe(true);
    });
  });

  describe("billing/shipping", () => {
    it("should accept billing prefix", () => {
      const result = validator.validate("billing email");
      expect(result.valid).toBe(true);
    });

    it("should accept shipping prefix", () => {
      const result = validator.validate("shipping street-address");
      expect(result.valid).toBe(true);
    });
  });

  describe("webauthn token", () => {
    it("should accept webauthn with username", () => {
      const result = validator.validate("username webauthn");
      expect(result.valid).toBe(true);
    });

    it("should accept webauthn with current-password", () => {
      const result = validator.validate("current-password webauthn");
      expect(result.valid).toBe(true);
    });

    it("should reject webauthn with incompatible field", () => {
      const result = validator.validate("email webauthn");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("webauthn");
    });
  });

  describe("complex combinations", () => {
    it("should accept section + billing + field", () => {
      const result = validator.validate("section-main billing cc-number");
      expect(result.valid).toBe(true);
    });

    it("should accept all tokens in correct order", () => {
      const result = validator.validate(
        "section-checkout shipping street-address",
      );
      expect(result.valid).toBe(true);
    });
  });

  describe("error cases", () => {
    it("should accept empty string", () => {
      const result = validator.validate("");
      expect(result.valid).toBe(true);
    });

    it("should reject extra tokens", () => {
      const result = validator.validate("email extra token");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("extra token");
    });
  });
});

import { describe, it, expect } from "vitest";
import { AutocompleteAttribute } from "../autocomplete-attribute.js";

describe("AutocompleteAttribute", () => {
  const validator = new AutocompleteAttribute();

  describe("simple on/off values", () => {
    it("should accept 'on'", () => {
      const result = validator.validateValue("on");
      expect(result.valid).toBe(true);
    });

    it("should accept 'off'", () => {
      const result = validator.validateValue("off");
      expect(result.valid).toBe(true);
    });

    it("should accept 'ON' (case insensitive)", () => {
      const result = validator.validateValue("ON");
      expect(result.valid).toBe(true);
    });
  });

  describe("autofill field names", () => {
    it("should accept valid field name", () => {
      const result = validator.validateValue("email");
      expect(result.valid).toBe(true);
    });

    it("should accept username", () => {
      const result = validator.validateValue("username");
      expect(result.valid).toBe(true);
    });

    it("should accept cc-number", () => {
      const result = validator.validateValue("cc-number");
      expect(result.valid).toBe(true);
    });

    it("should reject invalid field name", () => {
      const result = validator.validateValue("invalid-field");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid autofill field name");
    });
  });

  describe("section prefix", () => {
    it("should accept section-* prefix", () => {
      const result = validator.validateValue("section-blue email");
      expect(result.valid).toBe(true);
    });

    it("should accept section with shipping", () => {
      const result = validator.validateValue("section-red shipping street-address");
      expect(result.valid).toBe(true);
    });
  });

  describe("billing/shipping", () => {
    it("should accept billing prefix", () => {
      const result = validator.validateValue("billing email");
      expect(result.valid).toBe(true);
    });

    it("should accept shipping prefix", () => {
      const result = validator.validateValue("shipping street-address");
      expect(result.valid).toBe(true);
    });
  });

  describe("webauthn token", () => {
    it("should accept webauthn with username", () => {
      const result = validator.validateValue("username webauthn");
      expect(result.valid).toBe(true);
    });

    it("should accept webauthn with current-password", () => {
      const result = validator.validateValue("current-password webauthn");
      expect(result.valid).toBe(true);
    });

    it("should reject webauthn with incompatible field", () => {
      const result = validator.validateValue("email webauthn");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("webauthn");
    });
  });

  describe("complex combinations", () => {
    it("should accept section + billing + field", () => {
      const result = validator.validateValue("section-main billing cc-number");
      expect(result.valid).toBe(true);
    });

    it("should accept all tokens in correct order", () => {
      const result = validator.validateValue(
        "section-checkout shipping street-address",
      );
      expect(result.valid).toBe(true);
    });
  });

  describe("error cases", () => {
    it("should accept empty string", () => {
      const result = validator.validateValue("");
      expect(result.valid).toBe(true);
    });

    it("should reject extra tokens", () => {
      const result = validator.validateValue("email extra token");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("extra token");
    });
  });
});

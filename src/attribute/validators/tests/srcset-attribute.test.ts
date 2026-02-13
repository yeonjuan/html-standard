import { describe, it, expect } from "vitest";
import { SrcsetAttribute } from "../srcset-attribute.js";

describe("SrcsetAttribute", () => {
  const validator = new SrcsetAttribute();

  describe("valid srcset values", () => {
    it("should accept a single URL", () => {
      const result = validator.validateValue("image.jpg");
      expect(result.valid).toBe(true);
    });

    it("should accept URL with width descriptor", () => {
      const result = validator.validateValue("image.jpg 100w");
      expect(result.valid).toBe(true);
    });

    it("should accept URL with pixel density descriptor", () => {
      const result = validator.validateValue("image.jpg 2x");
      expect(result.valid).toBe(true);
    });

    it("should accept URL with decimal pixel density descriptor", () => {
      const result = validator.validateValue("image.jpg 1.5x");
      expect(result.valid).toBe(true);
    });

    it("should accept multiple comma-separated candidates", () => {
      const result = validator.validateValue(
        "image-1x.jpg 1x, image-2x.jpg 2x",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept multiple candidates with width descriptors", () => {
      const result = validator.validateValue(
        "small.jpg 100w, medium.jpg 500w, large.jpg 1000w",
      );
      expect(result.valid).toBe(true);
    });

    it("should accept URLs with extra whitespace", () => {
      const result = validator.validateValue("  image.jpg   200w  ");
      expect(result.valid).toBe(true);
    });

    it("should accept candidates with whitespace around commas", () => {
      const result = validator.validateValue("image1.jpg 1x , image2.jpg 2x");
      expect(result.valid).toBe(true);
    });

    it("should accept URL without descriptor", () => {
      const result = validator.validateValue("image.jpg, image2.jpg");
      expect(result.valid).toBe(true);
    });

    it("should accept scientific notation in pixel density", () => {
      const result = validator.validateValue("image.jpg 1.5e2x");
      expect(result.valid).toBe(true);
    });

    it("should accept pixel density with positive exponent", () => {
      const result = validator.validateValue("image.jpg 1e+2x");
      expect(result.valid).toBe(true);
    });
  });

  describe("invalid srcset values", () => {
    it("should reject empty string", () => {
      const result = validator.validateValue("");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("Srcset cannot be empty");
    });

    it("should reject whitespace-only string", () => {
      const result = validator.validateValue("   ");
      expect(result.valid).toBe(false);
      expect(result.reason).toBe("Srcset cannot be empty");
    });

    it("should reject empty candidate between commas", () => {
      const result = validator.validateValue("image1.jpg,,image2.jpg");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Image candidate string 2 is empty");
    });

    it("should reject URL starting with comma", () => {
      const result = validator.validateValue(",image.jpg");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Image candidate string 1 is empty");
    });

    it("should reject URL ending with comma", () => {
      const result = validator.validateValue("image.jpg,");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Image candidate string 2 is empty");
    });

    it("should reject zero width descriptor", () => {
      const result = validator.validateValue("image.jpg 0w");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid width descriptor");
    });

    it("should reject negative width descriptor", () => {
      const result = validator.validateValue("image.jpg -100w");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid width descriptor");
    });

    it("should reject decimal width descriptor", () => {
      const result = validator.validateValue("image.jpg 100.5w");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid width descriptor");
    });

    it("should reject zero pixel density descriptor", () => {
      const result = validator.validateValue("image.jpg 0x");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid pixel density descriptor");
    });

    it("should reject negative pixel density descriptor", () => {
      const result = validator.validateValue("image.jpg -2x");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid pixel density descriptor");
    });

    it("should reject descriptor without 'w' or 'x'", () => {
      const result = validator.validateValue("image.jpg 100");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid descriptor");
    });

    it("should reject invalid descriptor suffix", () => {
      const result = validator.validateValue("image.jpg 100p");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid descriptor");
    });

    it("should reject multiple descriptors", () => {
      const result = validator.validateValue("image.jpg 100w 2x");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("extra tokens found");
    });

    it("should reject non-numeric width descriptor", () => {
      const result = validator.validateValue("image.jpg abcw");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid width descriptor");
    });

    it("should reject non-numeric pixel density descriptor", () => {
      const result = validator.validateValue("image.jpg abcx");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Invalid pixel density descriptor");
    });

    it("should reject trailing comma", () => {
      const result = validator.validateValue("image1.jpg, image2.jpg,");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Image candidate string 3 is empty");
    });

    it("should reject leading comma", () => {
      const result = validator.validateValue(", image1.jpg, image2.jpg");
      expect(result.valid).toBe(false);
      expect(result.reason).toContain("Image candidate string 1 is empty");
    });
  });

  describe("edge cases", () => {
    it("should accept very large width descriptor", () => {
      const result = validator.validateValue("image.jpg 999999w");
      expect(result.valid).toBe(true);
    });

    it("should accept very small pixel density", () => {
      const result = validator.validateValue("image.jpg 0.001x");
      expect(result.valid).toBe(true);
    });

    it("should accept very large pixel density", () => {
      const result = validator.validateValue("image.jpg 999.99x");
      expect(result.valid).toBe(true);
    });

    it("should handle complex URLs", () => {
      const result = validator.validateValue(
        "https://example.com/path/to/image.jpg?query=param 2x",
      );
      expect(result.valid).toBe(true);
    });

    it("should handle relative URLs", () => {
      const result = validator.validateValue("../images/photo.jpg 1x");
      expect(result.valid).toBe(true);
    });

    it("should handle absolute URLs", () => {
      const result = validator.validateValue("/images/photo.jpg 100w");
      expect(result.valid).toBe(true);
    });
  });
});

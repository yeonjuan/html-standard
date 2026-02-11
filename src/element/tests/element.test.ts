import { describe, it, expect } from "vitest";
import { element } from "../element.js";

describe("element", () => {
  describe("attributes", () => {
    it("should validate attribute value using error message constants", () => {
      // Create an input element with accept attribute
      const input = element("input", {
        attributes: {
          get: (key: string) => {
            if (key === "accept") {
              return "image/png, image/jpeg";
            }
            return null;
          },
        },
      });

      const acceptAttribute = input.attributes.get("accept");
      expect(acceptAttribute).not.toBeNull();

      // Validate with valid string value
      const validResult = acceptAttribute!.validateValue("image/png");
      expect(validResult.valid).toBe(true);
    });
  });
});

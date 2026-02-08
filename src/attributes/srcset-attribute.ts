import {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types";

/**
 * Validates srcset attribute values.
 *
 * The value consists of one or more image candidate strings, separated by commas.
 * Each image candidate string contains:
 * - A valid non-empty URL (not starting/ending with comma)
 * - Optional descriptor: width (e.g., "100w") or pixel density (e.g., "2x")
 *
 * Examples:
 * - "image.jpg"
 * - "image-1x.jpg 1x, image-2x.jpg 2x"
 * - "small.jpg 100w, large.jpg 500w"
 *
 * @see https://html.spec.whatwg.org/multipage/images.html#srcset-attributes
 */
export class SrcsetAttribute implements AttributeSpec {
  static type = "SrcsetAttribute" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }

    if (value.trim() === "") {
      return {
        success: false,
        message: "Srcset cannot be empty",
      };
    }

    // Split by commas to get image candidate strings
    const candidates = value.split(",");

    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i].trim();

      if (candidate === "") {
        return {
          success: false,
          message: `Image candidate string ${i + 1} is empty`,
        };
      }

      // Parse the candidate: URL + optional descriptor
      const parts = candidate.split(/\s+/);
      const url = parts[0];

      // URL must not start or end with comma
      if (url.startsWith(",") || url.endsWith(",")) {
        return {
          success: false,
          message: `URL cannot start or end with comma: "${url}"`,
        };
      }

      // URL must not be empty
      if (url === "") {
        return {
          success: false,
          message: `URL in candidate string ${i + 1} is empty`,
        };
      }

      // If there's a descriptor, validate it
      if (parts.length > 1) {
        const descriptor = parts[parts.length - 1];

        // Width descriptor: must be positive integer followed by 'w'
        if (descriptor.endsWith("w")) {
          const widthStr = descriptor.slice(0, -1);
          const width = parseInt(widthStr, 10);

          if (!/^\d+$/.test(widthStr) || width <= 0) {
            return {
              success: false,
              message: `Invalid width descriptor: "${descriptor}" (must be positive integer followed by 'w')`,
            };
          }
        }
        // Pixel density descriptor: must be positive number followed by 'x'
        else if (descriptor.endsWith("x")) {
          const densityStr = descriptor.slice(0, -1);
          const density = parseFloat(densityStr);

          if (
            !/^-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(densityStr) ||
            density <= 0
          ) {
            return {
              success: false,
              message: `Invalid pixel density descriptor: "${descriptor}" (must be positive number followed by 'x')`,
            };
          }
        }
        // Invalid descriptor
        else {
          return {
            success: false,
            message: `Invalid descriptor: "${descriptor}" (must end with 'w' or 'x')`,
          };
        }

        // There should be only one descriptor
        if (parts.length > 2) {
          // Multiple tokens after URL - check if they're all whitespace or if there are extra descriptors
          const extraParts = parts.slice(1, -1);
          if (extraParts.some((p) => p !== "")) {
            return {
              success: false,
              message: `Invalid image candidate string: "${candidate}" (extra tokens found)`,
            };
          }
        }
      }
    }

    return {
      success: true,
    };
  }
}

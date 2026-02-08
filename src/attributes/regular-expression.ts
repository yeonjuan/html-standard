import {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types";

/**
 * Validates a regular expression pattern string.
 *
 * Used for HTML attributes that accept JavaScript regular expression patterns,
 * such as the pattern attribute on input elements.
 *
 * @see https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute
 */
export class RegularExpression implements AttributeSpec {
  static type = "RegularExpression" as const;
  constructor() {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }

    // Try to compile the regular expression to check if it's valid
    try {
      new RegExp(value);
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: `Invalid regular expression: "${value}" - ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}

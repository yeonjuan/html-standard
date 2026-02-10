import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";

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
      return invalid("Value must be a string");
    }

    // Try to compile the regular expression to check if it's valid
    try {
      new RegExp(value);
      return valid();
    } catch (error) {
      return invalid(
        `Invalid regular expression: "${value}" - ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}

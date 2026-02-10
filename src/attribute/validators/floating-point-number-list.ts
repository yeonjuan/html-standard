import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { FloatingPointNumber } from "./floating-point-number";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

/**
 * A valid list of floating-point numbers is a number of valid floating-point numbers separated by U+002C COMMA characters, with no other characters (e.g. no ASCII whitespace). In addition, there might be restrictions on the number of floating-point numbers that can be given, or on the range of values allowed.
 *
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-list-of-floating-point-numbers
 */
export class FloatingPointNumberList implements AttributeSpec {
  static type = "FloatingPointNumberList" as const;

  private floatingPointNumberValidator = new FloatingPointNumber();

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return invalid(ERROR_MESSAGES.VALUE_MUST_BE_STRING);
    }

    // Empty string is not valid
    if (value.length === 0) {
      return invalid(ERROR_MESSAGES.VALUE_CANNOT_BE_EMPTY);
    }

    // Split by comma (no whitespace allowed)
    const numbers = value.split(",");

    // Validate each number
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];

      // Check that there are no empty parts (which would indicate consecutive commas or leading/trailing commas)
      if (number.length === 0) {
        return invalid(`Empty value at position ${i + 1}`);
      }

      // Validate using FloatingPointNumber validator
      const result = this.floatingPointNumberValidator.validate(number);
      if (!result.valid) {
        return invalid(
          `Invalid floating-point number at position ${i + 1}: "${number}"`,
        );
      }
    }

    return valid();
  }
}

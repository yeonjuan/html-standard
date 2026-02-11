import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

/**
 * A string is a valid floating-point number if it consists of:
 *
 * - Optionally, a U+002D HYPHEN-MINUS character (-).
 * - One or both of the following, in the given order:
 *   - A series of one or more ASCII digits.
 *   - Both of the following, in the given order:
 *     - A single U+002E FULL STOP character (.).
 *     - A series of one or more ASCII digits.
 * - Optionally:
 *   - Either a U+0065 LATIN SMALL LETTER E character (e) or a U+0045 LATIN CAPITAL LETTER E character (E).
 *   - Optionally, a U+002D HYPHEN-MINUS character (-) or U+002B PLUS SIGN character (+).
 *   - A series of one or more ASCII digits.
 *
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#floating-point-numbers
 */
export class FloatingPointNumber implements AttributeSpec {
  static type = "FloatingPointNumber" as const;

  // Matches valid floating-point numbers according to HTML spec
  // Pattern breakdown:
  // -?              : optional minus sign
  // (?:             : non-capturing group for the number part
  //   \d+           : one or more digits
  //   (?:\.\d+)?    : optionally followed by decimal point and digits
  //   |             : OR
  //   \.\d+         : decimal point followed by one or more digits
  // )
  // (?:[eE][+-]?\d+)? : optional exponent part
  private static readonly PATTERN =
    /^-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?$/;

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    if (!FloatingPointNumber.PATTERN.test(value)) {
      return invalid(`Invalid floating-point number: "${value}"`);
    }

    return valid();
  }
}

import {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";

/**
 * A string is a valid integer if it consists of one or more ASCII digits,
 * optionally prefixed with a U+002D HYPHEN-MINUS character (-).
 *
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#signed-integers
 */
export class SignedInteger implements AttributeSpec {
  static type = "SignedInteger" as const;

  // Matches: optional hyphen-minus, followed by one or more digits
  private static readonly PATTERN = /^-?\d+$/;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }

    if (!SignedInteger.PATTERN.test(value)) {
      return {
        success: false,
        message: `Invalid signed integer: "${value}"`,
      };
    }

    return {
      success: true,
    };
  }
}

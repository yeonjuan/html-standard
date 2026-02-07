import {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";

export type NonNegativeIntegerOptions = {
  greaterThanZero?: boolean;
};

/**
 * A string is a valid non-negative integer if it consists of one or more ASCII digits.
 *
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#non-negative-integers
 */
export class NonNegativeInteger implements AttributeSpec {
  static type = "NonNegativeInteger" as const;

  constructor(private options?: NonNegativeIntegerOptions) {}

  // Matches: one or more digits (no hyphen-minus allowed)
  private static readonly PATTERN = /^\d+$/;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }

    if (!NonNegativeInteger.PATTERN.test(value)) {
      return {
        success: false,
        message: `Invalid non-negative integer: "${value}"`,
      };
    }

    if (this.options?.greaterThanZero) {
      const numValue = parseInt(value, 10);
      if (numValue === 0) {
        return {
          success: false,
          message: `Value must be greater than zero: "${value}"`,
        };
      }
    }

    return {
      success: true,
    };
  }
}

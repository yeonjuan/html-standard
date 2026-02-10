import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export type NonNegativeIntegerOptions = {
  min?: number;
  max?: number;
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
    if (!NonNegativeInteger.PATTERN.test(value)) {
      return invalid(`Invalid non-negative integer: "${value}"`);
    }

    const numValue = parseInt(value, 10);

    if (this.options?.min !== undefined) {
      if (numValue < this.options.min) {
        return invalid(
          `Value must be at least ${this.options.min}: "${value}"`,
        );
      }
    }

    if (this.options?.max !== undefined) {
      if (numValue > this.options.max) {
        return invalid(`Value must be at most ${this.options.max}: "${value}"`);
      }
    }

    return valid();
  }
}

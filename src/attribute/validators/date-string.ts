import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

/**
 * Validates date strings and global date-time strings.
 *
 * Valid date string format: YYYY-MM-DD
 * Valid global date-time string format: YYYY-MM-DDTHH:MM[:SS[.sss]][Z|±HH:MM]
 *
 * @see https://html.spec.whatwg.org/#valid-date-string
 * @see https://html.spec.whatwg.org/#valid-global-date-and-time-string
 */
export class DateString implements AttributeSpec {
  static type = "DateString" as const;

  static Type = {
    type: DateString.type,
  };

  constructor() {}

  // Valid date string: YYYY-MM-DD (year must be 4+ digits)
  private static readonly DATE_PATTERN = /^\d{4,}-\d{2}-\d{2}$/;

  // Valid global date-time string: YYYY-MM-DD[T| ]HH:MM[:SS[.sss]][Z|±HH:MM]
  private static readonly DATETIME_PATTERN =
    /^\d{4,}-\d{2}-\d{2}[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})?$/;

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    // Check if it matches either date or datetime format
    if (
      !DateString.DATE_PATTERN.test(value) &&
      !DateString.DATETIME_PATTERN.test(value)
    ) {
      return invalid(`Invalid date or datetime string: "${value}"`);
    }

    // Additional validation for date components
    const dateMatch = value.match(/^(\d{4,})-(\d{2})-(\d{2})/);
    if (dateMatch) {
      const year = parseInt(dateMatch[1], 10);
      const month = parseInt(dateMatch[2], 10);
      const day = parseInt(dateMatch[3], 10);

      if (year === 0) {
        return invalid(`Year must be greater than 0: "${value}"`);
      }

      if (month < 1 || month > 12) {
        return invalid(`Month must be between 1 and 12: "${value}"`);
      }

      // Check day range (simplified - doesn't account for leap years and month lengths)
      if (day < 1 || day > 31) {
        return invalid(`Day must be between 1 and 31: "${value}"`);
      }
    }

    // Additional validation for time components (if present)
    const timeMatch = value.match(/[T ](\d{2}):(\d{2})/);
    if (timeMatch) {
      const hour = parseInt(timeMatch[1], 10);
      const minute = parseInt(timeMatch[2], 10);

      if (hour > 23) {
        return invalid(`Hour must be between 0 and 23: "${value}"`);
      }

      if (minute > 59) {
        return invalid(`Minute must be between 0 and 59: "${value}"`);
      }

      // Check seconds if present
      const secondMatch = value.match(/[T ]\d{2}:\d{2}:(\d{2})/);
      if (secondMatch) {
        const second = parseInt(secondMatch[1], 10);
        if (second > 59) {
          return invalid(`Second must be between 0 and 59: "${value}"`);
        }
      }
    }

    return valid();
  }
}

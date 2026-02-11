import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

/**
 * BCP 47 language tag validator
 *
 * A valid BCP 47 language tag follows the ABNF grammar from RFC 5646:
 * - Language subtag (2-3 or 5-8 letters)
 * - Optional extended language subtags (3 letters, up to 3)
 * - Optional script subtag (4 letters)
 * - Optional region subtag (2 letters or 3 digits)
 * - Optional variant subtags (5-8 alphanumeric or 4 characters starting with digit)
 * - Optional extension subtags (singleton + 2-8 alphanumeric)
 * - Optional private use subtags (x- + 1-8 alphanumeric)
 *
 * Examples: en, en-US, zh-Hans-CN, en-GB-oxendict, x-private
 *
 * @see https://datatracker.ietf.org/doc/html/rfc5646
 * @see https://html.spec.whatwg.org/multipage/dom.html#attr-lang
 */
export class BCP47 implements AttributeSpec {
  static type = "BCP47" as const;

  // Simplified BCP 47 pattern
  // This is a practical implementation that covers most common cases
  // Full RFC 5646 compliance would require more complex parsing
  private static readonly PATTERN =
    /^[a-zA-Z]{2,3}(?:-[a-zA-Z]{3}){0,3}(?:-[a-zA-Z]{4})?(?:-(?:[a-zA-Z]{2}|[0-9]{3}))?(?:-(?:[a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*(?:-[0-9a-wyzA-WYZ](?:-[a-zA-Z0-9]{2,8})+)*(?:-x(?:-[a-zA-Z0-9]{1,8})+)?$|^x(?:-[a-zA-Z0-9]{1,8})+$|^[a-zA-Z]{4,8}$/;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // Empty string is valid (no language specified)
    if (value === "") {
      return valid();
    }

    // Basic validation: check against pattern
    if (!BCP47.PATTERN.test(value)) {
      return invalid(`Invalid BCP 47 language tag: "${value}"`);
    }

    // Additional validation: check subtag lengths
    const subtags = value.split("-");

    for (let i = 0; i < subtags.length; i++) {
      const subtag = subtags[i];

      // Subtags must not be empty
      if (subtag.length === 0) {
        return invalid(
          `Invalid BCP 47 language tag: empty subtag in "${value}"`,
        );
      }

      // First subtag (language or 'x' for private use) should be 2-8 letters
      if (i === 0) {
        if (subtag === "x") {
          // Private use tag, remaining subtags should be 1-8 alphanumeric
          continue;
        }
        if (!/^[a-zA-Z]{2,8}$/.test(subtag)) {
          return invalid(`Invalid language subtag in "${value}": "${subtag}"`);
        }
      }
    }

    return valid();
  }
}

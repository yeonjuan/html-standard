import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

/**
 * Validates a hash-name reference to an element.
 *
 * A valid hash-name reference consists of a U+0023 NUMBER SIGN character (#)
 * followed by a string that matches the value of a name attribute.
 *
 * Format: #name-value
 *
 * @see https://html.spec.whatwg.org/#valid-hash-name-reference
 */
export class HashNameReference implements AttributeSpec {
  static type = "HashNameReference" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // Must start with # and have at least one character after it
    if (!value.startsWith("#")) {
      return invalid(`Hash-name reference must start with "#": "${value}"`);
    }

    if (value.length === 1) {
      return invalid(
        `Hash-name reference must have a name after "#": "${value}"`,
      );
    }

    return valid();
  }
}

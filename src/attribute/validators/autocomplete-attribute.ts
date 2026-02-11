import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";
import { REGEX_ASCII_WHITESPACE } from "../../shared/index.js";

/**
 * Validates the autocomplete attribute for input, select, and textarea elements.
 *
 * The autocomplete attribute can be:
 * 1. "on" or "off"
 * 2. An ordered set of space-separated tokens:
 *    - Optional: section-* (where * is a string)
 *    - Optional: billing or shipping
 *    - Required: autofill field name
 *    - Optional: webauthn (only for username and certain fields)
 *
 * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
 */
export class AutocompleteAttribute implements AttributeSpec {
  static type = "AutocompleteAttribute" as const;

  // Autofill field names per HTML Standard
  private static readonly AUTOFILL_FIELD_NAMES = new Set([
    "name",
    "honorific-prefix",
    "given-name",
    "additional-name",
    "family-name",
    "honorific-suffix",
    "nickname",
    "username",
    "new-password",
    "current-password",
    "one-time-code",
    "organization-title",
    "organization",
    "street-address",
    "address-line1",
    "address-line2",
    "address-line3",
    "address-level4",
    "address-level3",
    "address-level2",
    "address-level1",
    "country",
    "country-name",
    "postal-code",
    "cc-name",
    "cc-given-name",
    "cc-additional-name",
    "cc-family-name",
    "cc-number",
    "cc-exp",
    "cc-exp-month",
    "cc-exp-year",
    "cc-csc",
    "cc-type",
    "transaction-currency",
    "transaction-amount",
    "language",
    "bday",
    "bday-day",
    "bday-month",
    "bday-year",
    "sex",
    "url",
    "photo",
    "tel",
    "tel-country-code",
    "tel-national",
    "tel-area-code",
    "tel-local",
    "tel-local-prefix",
    "tel-local-suffix",
    "tel-extension",
    "email",
    "impp",
  ]);

  // Fields that can have webauthn token
  private static readonly WEBAUTHN_COMPATIBLE_FIELDS = new Set([
    "username",
    "current-password",
  ]);

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    // Empty string means default behavior
    if (value === "") {
      return valid();
    }

    const normalized = value.toLowerCase().trim();

    // Check for simple "on" or "off"
    if (normalized === "on" || normalized === "off") {
      return valid();
    }

    // Parse as space-separated tokens
    const tokens = normalized.split(REGEX_ASCII_WHITESPACE).filter(Boolean);

    if (tokens.length === 0) {
      return invalid("Autocomplete value cannot be empty");
    }

    let index = 0;
    let hasSection = false;
    let hasAddressType = false;
    let hasFieldName = false;
    let hasWebauthn = false;
    let fieldName = "";

    // Optional: section-* token
    if (tokens[index]?.startsWith("section-")) {
      hasSection = true;
      index++;
    }

    // Optional: billing or shipping
    if (tokens[index] === "billing" || tokens[index] === "shipping") {
      hasAddressType = true;
      index++;
    }

    // Required: autofill field name
    if (index < tokens.length) {
      const token = tokens[index];
      if (AutocompleteAttribute.AUTOFILL_FIELD_NAMES.has(token)) {
        hasFieldName = true;
        fieldName = token;
        index++;
      } else {
        return invalid(
          `Invalid autofill field name: "${token}". Must be one of the standard autofill field names.`,
        );
      }
    } else {
      return invalid("Autocomplete value must include an autofill field name");
    }

    // Optional: webauthn
    if (index < tokens.length) {
      if (tokens[index] === "webauthn") {
        if (!AutocompleteAttribute.WEBAUTHN_COMPATIBLE_FIELDS.has(fieldName)) {
          return invalid(
            `"webauthn" token is only valid with username or current-password fields, not "${fieldName}"`,
          );
        }
        hasWebauthn = true;
        index++;
      }
    }

    // No extra tokens allowed
    if (index < tokens.length) {
      return invalid(
        `Invalid extra token in autocomplete value: "${tokens[index]}"`,
      );
    }

    return valid();
  }
}

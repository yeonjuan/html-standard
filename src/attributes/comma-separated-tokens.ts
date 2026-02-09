import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";
import { valid, invalid } from "./helpers/result";

/**
 * A set of comma-separated tokens is a string containing zero or more tokens each separated from the next by a single U+002C COMMA character (,), where tokens consist of any string of zero or more characters, neither beginning nor ending with ASCII whitespace, nor containing any U+002C COMMA characters (,), and optionally surrounded by ASCII whitespace.
 *
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens
 */
export class CommaSeparatedTokens implements AttributeSpec {
  static type = "CommaSeparatedTokens" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return invalid("Value must be a string");
    }

    // According to the spec:
    // - Tokens can be zero or more characters
    // - Tokens are separated by commas
    // - Tokens can be optionally surrounded by ASCII whitespace
    // - Tokens themselves should not begin or end with ASCII whitespace
    // - Tokens should not contain commas

    // The spec is describing the format, not validation rules.
    // Any comma-separated string is valid as the parsing handles whitespace trimming.

    return valid();
  }
}

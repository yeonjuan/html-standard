import { MicroSyntaxes } from "./types";
import { valid, invalid } from "./helpers";

const REG_SPACES = /[\t\n\f\r ]+/;

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens
 *
 * A set of space-separated tokens is a string containing zero or more words (known as tokens) separated by one or more ASCII whitespace, where words consist of any string of one or more characters, none of which are ASCII whitespace.
 * A string containing a set of space-separated tokens may have leading or trailing ASCII whitespace.
 * An unordered set of unique space-separated tokens is a set of space-separated tokens where none of the tokens are duplicated.
 * An ordered set of unique space-separated tokens is a set of space-separated tokens where none of the tokens are duplicated but where the order of the tokens is meaningful.
 * Sets of space-separated tokens sometimes have a defined set of allowed values. When a set of allowed values is defined, the tokens must all be from that list of allowed values; other values are non-conforming. If no such set of allowed values is provided, then all values are conforming.
 */
export class SetOfSpaceSeparatedTokens implements MicroSyntaxes.Spec {
  constructor(
    private options: {
      unique?: boolean;
      allowedValues?: Set<string>;
    } = {},
  ) {}

  check(value: MicroSyntaxes.Value): MicroSyntaxes.CheckResult {
    if (value === undefined) {
      return valid();
    }

    if (typeof value !== "string") {
      return invalid(
        `Space-separated tokens must be a string, got ${typeof value}`,
      );
    }

    if (value.trim() === "") {
      return valid();
    }

    const tokens = value.split(REG_SPACES).filter((token) => token !== "");

    if (this.options.unique) {
      const seen = new Set<string>();
      for (const token of tokens) {
        if (seen.has(token)) {
          return invalid(`Duplicate token found: "${token}"`);
        }
        seen.add(token);
      }
    }

    if (this.options.allowedValues) {
      for (const token of tokens) {
        if (!this.options.allowedValues.has(token)) {
          return invalid(
            `Token "${token}" is not in the list of allowed values`,
          );
        }
      }
    }

    return valid();
  }
}

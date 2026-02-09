import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types/index.js";
import { REGEX_ASCII_WHITESPACE } from "../constants/index.js";
import { valid, invalid } from "./helpers/index.js";

export type SpaceSeperatedTokensOptions = {
  unique: boolean;
  allowed?: string[];
  validateToken?: (value: string) => boolean;
};

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens
 */
export class SpaceSeperatedTokens implements AttributeSpec {
  static type = "SpaceSeperatedTokens" as const;
  constructor(private options: SpaceSeperatedTokensOptions) {}

  private parse(value: string) {
    const tokens = value.split(REGEX_ASCII_WHITESPACE);
    return tokens;
  }

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return invalid("Value must be a string");
    }

    const tokens = this.parse(value).filter((token) => token !== "");

    // Check uniqueness
    if (this.options.unique) {
      const uniqueTokens = new Set(tokens);

      if (tokens.length !== uniqueTokens.size) {
        return invalid("Tokens must be unique");
      }
    }

    // Check allowed tokens
    if (this.options.allowed) {
      for (const token of tokens) {
        const isAllowed = this.options.allowed.some((allowedToken) => {
          return token.toLowerCase() === allowedToken.toLowerCase();
        });

        if (!isAllowed) {
          return invalid(
            `Invalid token: "${token}". Allowed tokens: ${this.options.allowed.join(", ")}`,
          );
        }
      }
    }
    // Custom token validation
    if (typeof this.options.validateToken === "function") {
      for (const token of tokens) {
        if (!this.options.validateToken(token)) {
          return invalid(`Invalid token: "${token}"`);
        }
      }
    }

    return valid();
  }
}

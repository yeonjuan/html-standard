import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types";
import { REGEX_ASCII_WHITESPACE } from "../../constants";

export type SpaceSeperatedTokensOptions = {
  unique: boolean;
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
    if (value === null || value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }

    if (this.options.unique) {
      const tokens = this.parse(value).filter((token) => token !== "");
      const uniqueTokens = new Set(tokens);

      if (tokens.length !== uniqueTokens.size) {
        return {
          success: false,
          message: "Tokens must be unique",
        };
      }
    }

    return {
      success: true,
    };
  }
}

import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";

export type ValidURLOptions = {
  nonEmpty: boolean;
  potentiallySurroundedBySpaces: boolean;
};

/**
 * Validates URLs according to HTML Standard.
 * A valid URL is a string that can be parsed as a URL.
 *
 * @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-string
 */
export class ValidURL implements AttributeSpec {
  static type = "ValidURL" as const;

  static PotentiallySurroundedBySpaces = {
    type: ValidURL.type,
    options: {
      nonEmpty: false,
      potentiallySurroundedBySpaces: true,
    },
  };

  static NonEmptyPotentiallySurroundedBySpaces = {
    type: ValidURL.type,
    options: {
      nonEmpty: true,
      potentiallySurroundedBySpaces: true,
    },
  };

  constructor(private options: ValidURLOptions) {}

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    let processedValue = value;

    if (this.options.potentiallySurroundedBySpaces) {
      processedValue = this.stripASCIIWhitespace(value);
    }

    if (this.options.nonEmpty && processedValue === "") {
      return invalid("Value cannot be empty");
    }

    if (processedValue === "") {
      return valid();
    }

    if (this.hasInvalidURLCharacters(processedValue)) {
      return invalid("URL contains invalid characters");
    }

    try {
      new URL(processedValue);
      return valid(); // absolute url
    } catch {
      try {
        new URL(processedValue, "https://www.base.com");

        return valid();
      } catch {
        return invalid("Invalid URL format");
      }
    }
  }

  /**
   * Strips leading and trailing ASCII whitespace characters.
   * ASCII whitespace: space (0x20), tab (0x09), LF (0x0A), FF (0x0C), CR (0x0D)
   *
   * @see https://infra.spec.whatwg.org/#ascii-whitespace
   */
  private stripASCIIWhitespace(value: string): string {
    return value.replace(
      /^[\x20\x09\x0A\x0C\x0D]+|[\x20\x09\x0A\x0C\x0D]+$/g,
      "",
    );
  }

  /**
   * Checks for characters that are explicitly invalid in URLs
   * based on the URL Standard.
   * Control characters (0x00-0x1F), space (0x20), and DEL (0x7F) are invalid.
   */
  private hasInvalidURLCharacters(value: string): boolean {
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      // Control characters (0x00-0x1F), space (0x20), and DEL (0x7F)
      if (code <= 0x20 || code === 0x7f) {
        return true;
      }
    }
    return false;
  }
}

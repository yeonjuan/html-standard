import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export type EnumeratedAttributeOptions = {
  keywords: string[];
};

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 */
export class EnumeratedAttribute implements AttributeSpec {
  static type = "EnumeratedAttribute" as const;
  constructor(private options: EnumeratedAttributeOptions) {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    const normalizedValue = value.toLowerCase();
    const isValid = this.options.keywords.includes(normalizedValue);

    if (!isValid) {
      return invalid(
        `Value "${value}" is not a valid keyword. Expected one of: ${this.options.keywords.join(", ")}`,
      );
    }

    return valid();
  }
}

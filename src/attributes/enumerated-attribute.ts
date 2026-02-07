import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";

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
    if (value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }

    const normalizedValue = value.toLowerCase();
    const isValid = this.options.keywords.includes(normalizedValue);

    if (!isValid) {
      return {
        success: false,
        message: `Value "${value}" is not a valid keyword. Expected one of: ${this.options.keywords.join(", ")}`,
      };
    }

    return {
      success: true,
    };
  }
}

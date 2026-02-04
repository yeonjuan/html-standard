import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types";

export type EnumeratedAttributesOptions = {
  keywords: string[];
};

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 */
export class EnumeratedAttributes implements AttributeSpec {
  static type = "EnumeratedAttributes" as const;
  constructor(private options: EnumeratedAttributesOptions) {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === null || value === true) {
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

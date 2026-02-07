import { AttributeValue } from "../../types";
import { AttributeSpec, AttributeSpecValidateResult } from "../../types";

export type BooleanAttributesOptions = {
  attributeKey: string;
};

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute
 */
export class BooleanAttributes implements AttributeSpec {
  static type = "BooleanAttributes" as const;
  constructor(private attributeKey: string) {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (!value) {
      return {
        success: true,
      };
    }

    if (this.attributeKey === value?.toLowerCase()) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      message: `Boolean attribute value must be empty or match the attribute name "${this.attributeKey}", got: "${value}"`,
    };
  }
}

import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";

export type BooleanAttributeOptions = {
  attributeKey: string;
};

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute
 */
export class BooleanAttribute implements AttributeSpec {
  static type = "BooleanAttribute" as const;

  static Type = {
    type: BooleanAttribute.type,
  };

  constructor(private attributeKey: string) {}

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    if (!value) {
      return valid();
    }

    if (this.attributeKey === value?.toLowerCase()) {
      return valid();
    }

    return invalid(
      `Boolean attribute value must be empty or match the attribute name "${this.attributeKey}", got: "${value}"`,
    );
  }
}

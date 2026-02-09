import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types/index.js";
import { valid, invalid } from "./helpers/index.js";

export type BooleanAttributeOptions = {
  attributeKey: string;
};

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute
 */
export class BooleanAttribute implements AttributeSpec {
  static type = "BooleanAttribute" as const;
  constructor(private attributeKey: string) {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (!value || value === true) {
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

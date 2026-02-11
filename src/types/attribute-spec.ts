import type { AttributeValue } from "./attribute-value.js";

export type AttributeSpecValidateResult = {
  valid: boolean;
  reason?: string;
};

export interface AttributeSpec {
  validateValue(value: AttributeValue): AttributeSpecValidateResult;
}

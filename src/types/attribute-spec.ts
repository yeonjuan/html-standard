import type { AttributeValue } from "./attribute-value.js";

export type AttributeSpecValidateResult = {
  valid: boolean;
  message?: string;
};

export interface AttributeSpec {
  validate(value: AttributeValue): AttributeSpecValidateResult;
}

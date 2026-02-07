import { AttributeValue } from "./attribute-value";

export type AttributeSpecValidateResult = {
  success: boolean;
  message?: string;
};

export interface AttributeSpec {
  validate(value: AttributeValue): AttributeSpecValidateResult;
}

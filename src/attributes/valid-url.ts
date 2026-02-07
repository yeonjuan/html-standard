import {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";

export class ValidURL implements AttributeSpec {
  static type = "ValidURL" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    return {
      success: true,
    };
  }
}

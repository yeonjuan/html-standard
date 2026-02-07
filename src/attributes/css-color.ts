import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";

export class CSSColor implements AttributeSpec {
  static type = "CSSColor" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    if (value === true) {
      return {
        success: false,
        message: "Value must be a string",
      };
    }
    return {
      success: true,
    };
  }
}

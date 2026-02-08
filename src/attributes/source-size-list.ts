import {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types";

export class SourceSizeList implements AttributeSpec {
  static type = "SourceSizeList" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (!value || value === true) {
      return {
        message: "Value must be a string",
        success: false,
      };
    }
    // TODO: Implementation
    return {
      success: true,
    };
  }
}

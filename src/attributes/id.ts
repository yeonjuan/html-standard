import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";

export class ID implements AttributeSpec {
  static type = "ID" as const;
  constructor() {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
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

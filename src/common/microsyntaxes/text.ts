import {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types";

export class Text implements AttributeSpec {
  static type = "Text" as const;

  validate(_: AttributeValue): AttributeSpecValidateResult {
    return {
      success: true,
    };
  }
}

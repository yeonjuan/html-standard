import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid } from "../../shared/result.js";

export class Text implements AttributeSpec {
  static type = "Text" as const;

  static Type = {
    type: Text.type,
  };

  validateValue(_: AttributeValue): AttributeSpecValidateResult {
    return valid();
  }
}

import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid } from "../../shared/result.js";

export class Text implements AttributeSpec {
  static type = "Text" as const;

  validateValue(_: AttributeValue): AttributeSpecValidateResult {
    return valid();
  }
}

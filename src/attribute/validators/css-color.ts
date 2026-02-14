import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class CSSColor implements AttributeSpec {
  static type = "CSSColor" as const;

  static Type = {
    type: CSSColor.type,
  };

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    return valid();
  }
}

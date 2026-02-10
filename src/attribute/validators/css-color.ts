import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class CSSColor implements AttributeSpec {
  static type = "CSSColor" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    if (value === true) {
      return invalid(ERROR_MESSAGES.VALUE_MUST_BE_STRING);
    }
    return valid();
  }
}

import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class SourceSizeList implements AttributeSpec {
  static type = "SourceSizeList" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (!value || value === true) {
      return invalid(ERROR_MESSAGES.VALUE_MUST_BE_STRING);
    }
    // TODO: Implementation
    return valid();
  }
}

import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class SourceSizeList implements AttributeSpec {
  static type = "SourceSizeList" as const;

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: Implementation
    return valid();
  }
}

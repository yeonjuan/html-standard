import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class MediaQueryList implements AttributeSpec {
  static type = "MediaQueryList" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: Implementation
    return valid();
  }
}

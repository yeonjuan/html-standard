import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class ID implements AttributeSpec {
  static type = "ID" as const;

  static Type = {
    type: ID.type,
  };

  constructor() {}

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    return valid();
  }
}

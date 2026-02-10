import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

export class ID implements AttributeSpec {
  static type = "ID" as const;
  constructor() {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    return valid();
  }
}

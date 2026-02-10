import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid } from "../../shared/result.js";

export class ValidURL implements AttributeSpec {
  static type = "ValidURL" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    return valid();
  }
}

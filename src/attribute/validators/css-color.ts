import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";

export class CSSColor implements AttributeSpec {
  static type = "CSSColor" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    if (value === true) {
      return invalid("Value must be a string");
    }
    return valid();
  }
}

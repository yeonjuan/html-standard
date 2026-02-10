import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";

export class MediaQueryList implements AttributeSpec {
  static type = "MediaQueryList" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (!value || value === true) {
      return invalid("Value must be a string");
    }
    // TODO: Implementation
    return valid();
  }
}

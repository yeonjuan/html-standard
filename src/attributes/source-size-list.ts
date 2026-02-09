import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types/index.js";
import { valid, invalid } from "./helpers/index.js";

export class SourceSizeList implements AttributeSpec {
  static type = "SourceSizeList" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (!value || value === true) {
      return invalid("Value must be a string");
    }
    // TODO: Implementation
    return valid();
  }
}

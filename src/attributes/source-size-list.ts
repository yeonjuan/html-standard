import {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types";
import { valid, invalid } from "./helpers/result";

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

import {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types";
import { valid, invalid } from "./helpers/result";

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

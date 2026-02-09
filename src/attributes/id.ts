import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";
import { valid, invalid } from "./helpers/result";

export class ID implements AttributeSpec {
  static type = "ID" as const;
  constructor() {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return invalid("Value must be a string");
    }

    return valid();
  }
}

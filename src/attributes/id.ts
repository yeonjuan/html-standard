import type {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types/index.js";
import { valid, invalid } from "./helpers/index.js";

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

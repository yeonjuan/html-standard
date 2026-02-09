import {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";
import { valid } from "./helpers/result";

export class ValidURL implements AttributeSpec {
  static type = "ValidURL" as const;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // TODO: implement
    return valid();
  }
}

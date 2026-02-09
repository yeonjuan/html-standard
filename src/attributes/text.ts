import {
  AttributeSpec,
  AttributeSpecValidateResult,
  AttributeValue,
} from "../types";
import { valid } from "./helpers/result";

export class Text implements AttributeSpec {
  static type = "Text" as const;

  validate(_: AttributeValue): AttributeSpecValidateResult {
    return valid();
  }
}

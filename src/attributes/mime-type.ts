import {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../types";
import { valid, invalid } from "./helpers/result";

/**
 * A valid MIME type string represents a MIME type.
 *
 * Format: type "/" subtype [ ";" parameter ]
 *
 * @see https://html.spec.whatwg.org/multipage/infrastructure.html#valid-mime-type
 * @see https://datatracker.ietf.org/doc/html/rfc2045#section-5.1
 */
export class MIMEType implements AttributeSpec {
  static type = "MIMEType" as const;
  constructor() {}

  // Matches: type/subtype with optional parameters
  // type and subtype: one or more characters from the token character set
  // token: any CHAR except CTLs or separators
  private static readonly PATTERN =
    /^[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+\/[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+(?:\s*;\s*[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+=(?:[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+|"[^"]*"))*$/;

  validate(value: AttributeValue): AttributeSpecValidateResult {
    if (value === true) {
      return invalid("Value must be a string");
    }

    if (!MIMEType.PATTERN.test(value)) {
      return invalid(`Invalid MIME type: "${value}"`);
    }

    return valid();
  }
}

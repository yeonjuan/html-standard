import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

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

  static Type = {
    type: MIMEType.type,
  };

  constructor() {}

  // Matches: type/subtype with optional parameters
  // type and subtype: one or more characters from the token character set
  // token: any CHAR except CTLs or separators
  private static readonly PATTERN =
    /^[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+\/[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+(?:\s*;\s*[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+=(?:[a-zA-Z0-9!#$%&'*+\-.^_`{|}~]+|"[^"]*"))*$/;

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    if (!MIMEType.PATTERN.test(value)) {
      return invalid(`Invalid MIME type: "${value}"`);
    }

    return valid();
  }
}

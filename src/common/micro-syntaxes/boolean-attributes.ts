import { MicroSyntaxes } from "./types";
import { valid, invalid } from "./helpers";

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
 * If the attribute is present, its value must either be the empty string or a value that is an ASCII case-insensitive match for the attribute's canonical name, with no leading or trailing whitespace.
 */
export class BooleanAttributes
  implements MicroSyntaxes.Spec<MicroSyntaxes.Type.BooleanAttributes>
{
  type = MicroSyntaxes.Type.BooleanAttributes;

  constructor(private attribute: string) {}

  check(value: MicroSyntaxes.Value): MicroSyntaxes.CheckResult {
    if (value === undefined || value === "") {
      return valid();
    }

    if (typeof value === "string") {
      const trimmedValue = value.trim();
      if (trimmedValue !== value) {
        return invalid(
          `Boolean attribute value must not have leading or trailing whitespace`,
        );
      }
      if (trimmedValue.toLowerCase() === this.attribute.toLowerCase()) {
        return valid();
      }
      return invalid(
        `Boolean attribute value must be either empty string or "${this.attribute}" (case-insensitive)`,
      );
    }

    return invalid(
      `Boolean attribute value must be a string, got ${typeof value}`,
    );
  }
}

import { MicroSyntaxes } from "./types";
import { valid, invalid } from "./helpers";

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#keywords-and-enumerated-attributes
 *
 * Some attributes, called enumerated attributes, take on a finite set of states.
 * The state for such an attribute is derived by combining the attribute's value, a set of keyword/state mappings, and three possible special states that can also be given in the specification of the attribute.
 * These special states are the invalid value default, the missing value default, and the empty value default.
 */

export class EnumeratedAttributes implements MicroSyntaxes.Spec {
  static create({
    emptyValueDefault,
    keywords,
  }: {
    emptyValueDefault: boolean;
    keywords: string[];
  }) {
    return new EnumeratedAttributes(emptyValueDefault, keywords);
  }

  private constructor(
    private emptyValueDefault: boolean,
    private keywords: string[],
  ) {}

  check(value: MicroSyntaxes.Value): MicroSyntaxes.CheckResult {
    if (typeof value !== "string") {
      return invalid(
        `Enumerated attribute value must be a string, got ${typeof value}`,
      );
    }

    // Empty value default: attribute is present but empty
    if (value === "" || value === undefined) {
      if (this.emptyValueDefault) {
        return valid();
      }

      return invalid("Empty string is not allowed for this attribute");
    }

    const normalizedValue = value.trim().toLowerCase();

    // Check if value has leading/trailing whitespace (non-conforming)
    if (normalizedValue !== value.toLowerCase()) {
      return invalid(
        "Enumerated attribute value must not have leading or trailing whitespace",
      );
    }
    if (!this.keywords.includes(normalizedValue)) {
      return invalid(
        `Value "${value}" is not a valid keyword for this enumerated attribute`,
      );
    }
    return valid();
  }
}

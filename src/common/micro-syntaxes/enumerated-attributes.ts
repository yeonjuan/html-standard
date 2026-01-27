import { MicroSyntaxes } from "./types";
import { valid, invalid } from "./helpers";

/**
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#keywords-and-enumerated-attributes
 *
 * Some attributes, called enumerated attributes, take on a finite set of states.
 * The state for such an attribute is derived by combining the attribute's value, a set of keyword/state mappings, and three possible special states that can also be given in the specification of the attribute.
 * These special states are the invalid value default, the missing value default, and the empty value default.
 */
interface EnumeratedAttributeState {
  name: string;
  keywords: string[];
  conforming?: boolean;
}

export class EnumeratedAttributes implements MicroSyntaxes.Spec {
  private keywordToState: Map<string, EnumeratedAttributeState>;
  private statesByName: Map<string, EnumeratedAttributeState>;

  constructor(
    private options: {
      states: EnumeratedAttributeState[];
      missingValueDefault?: string;
      invalidValueDefault?: string;
      emptyValueDefault?: string;
    },
  ) {
    this.keywordToState = new Map();
    this.statesByName = new Map();

    // Build keyword-to-state mapping (case-insensitive)
    for (const state of options.states) {
      this.statesByName.set(state.name, state);
      for (const keyword of state.keywords) {
        this.keywordToState.set(keyword.toLowerCase(), state);
      }
    }
  }

  check(value: MicroSyntaxes.Value): MicroSyntaxes.CheckResult {
    // Missing value default: attribute is not present (undefined)
    if (value === undefined) {
      if (this.options.missingValueDefault) {
        return valid();
      }
      return valid();
    }

    if (typeof value !== "string") {
      return invalid(
        `Enumerated attribute value must be a string, got ${typeof value}`,
      );
    }

    // Empty value default: attribute is present but empty
    if (value === "") {
      if (this.options.emptyValueDefault) {
        return valid();
      }
      // Check if empty string is a valid keyword
      if (this.keywordToState.has("")) {
        const state = this.keywordToState.get("");
        if (state?.conforming !== false) {
          return valid();
        }
      }
      // If no empty value default and empty is not a valid keyword, use invalid value default
      if (this.options.invalidValueDefault) {
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

    const state = this.keywordToState.get(normalizedValue);
    if (state) {
      if (state.conforming === false) {
        return invalid(
          `Keyword "${value}" is non-conforming for this attribute`,
        );
      }
      return valid();
    }

    // Invalid value: no keyword match
    if (this.options.invalidValueDefault) {
      return valid();
    }

    return invalid(
      `Value "${value}" is not a valid keyword for this enumerated attribute`,
    );
  }
}

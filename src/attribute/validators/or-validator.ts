import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import type { AnyAttribute } from "./any-attribute.js";
import { createAttributeSpec } from "../create-attribute-spec.js";
import { valid, invalid } from "../../shared/result.js";

export type OrValidatorOptions = {
  items: Exclude<AnyAttribute, { type: "#or" }>[];
};

/**
 * OrValidator validates a value against multiple validators.
 * If any validator passes, the value is considered valid.
 * If all validators fail, returns the error from the last validator.
 */
export class OrValidator implements AttributeSpec {
  static type = "#or" as const;
  constructor(private options: OrValidatorOptions) {}

  validate(value: AttributeValue): AttributeSpecValidateResult {
    // Try each validator in order
    let lastError: string | undefined;

    for (const item of this.options.items) {
      const spec = createAttributeSpec("", item);
      const result = spec.validate(value);

      if (result.valid) {
        return valid();
      }

      lastError = result.reason;
    }

    // If all validators failed, return the last error
    return invalid(
      lastError ?? "Value does not match any of the allowed formats",
    );
  }
}

import type { AttributeSpecValidateResult } from "../types/index.js";

const VALID: AttributeSpecValidateResult = {
  valid: true,
};

export function valid(): AttributeSpecValidateResult {
  return VALID;
}

export function invalid(reason: string): AttributeSpecValidateResult {
  return {
    valid: false,
    reason,
  };
}

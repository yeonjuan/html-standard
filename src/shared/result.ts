import type { AttributeSpecValidateResult } from "../types/index.js";

const VALID: AttributeSpecValidateResult = {
  valid: true,
};

export function valid(): AttributeSpecValidateResult {
  return VALID;
}

export function invalid(message: string): AttributeSpecValidateResult {
  return {
    valid: false,
    message,
  };
}

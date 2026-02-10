import type { AttributeSpecValidateResult } from "../types/index.js";

const VALID: AttributeSpecValidateResult = {
  success: true,
};

export function valid(): AttributeSpecValidateResult {
  return VALID;
}

export function invalid(message: string): AttributeSpecValidateResult {
  return {
    success: false,
    message,
  };
}

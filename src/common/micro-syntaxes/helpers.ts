import { MicroSyntaxes } from "./types";

const validResult = { valid: true } as const;

export const valid = (): MicroSyntaxes.CheckResult => validResult;

export const invalid = (message: string): MicroSyntaxes.CheckResult => ({
  valid: false,
  message,
});

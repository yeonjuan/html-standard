export namespace MicroSyntaxes {
  export type Value = undefined | string | number;

  export interface CheckResult {
    valid: boolean;
    message?: string;
  }

  export interface Spec {
    check(value: Value): CheckResult;
  }
}

export namespace MicroSyntaxes {
  export enum Type {
    BooleanAttributes = "BooleanAttributes",
  }

  export type Value = undefined | string | number;

  export interface CheckResult {
    valid: boolean;
    message?: string;
  }

  export interface Spec<T extends Type> {
    type: T;
    check(value: Value): CheckResult;
  }
}

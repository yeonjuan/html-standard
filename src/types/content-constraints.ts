import { ReadonlyMap } from "./readonly-map";

export type ContentConstraintValue = {
  ifAttributes?(attributes: Record<string, string>): boolean;
  required?: boolean;
  disallow?: boolean;
  max?: number;
  min?: number;
};

export type ContentConstraints = {
  children?: ContentConstraint;
  descendants?: ContentConstraint;
};

export type ContentConstraint = ReadonlyMap<ContentConstraintValue>;

import type { ElementSpec } from "./element-spec";

type ElementState = {
  parent?: string;
  attributes?: Record<string, string | boolean>;
};

export type GetElementSpec = (state?: ElementState) => ElementSpec;

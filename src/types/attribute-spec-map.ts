import type { AttributeSpec } from "./attribute-spec.js";

export interface AttributeSpecMap {
  get: (key: string) => AttributeSpec | null;
  has: (key: string) => boolean;
}

import type { AttributeValue } from "./attribute-value";

export interface AttributeState {
  get(key: string): AttributeValue;
}

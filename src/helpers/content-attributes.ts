import { AttributesSpecMap } from "../types";
import { emptyAttributes, globalAttributes } from "./attributes";

export const contentAttributes = (
  global: boolean,
  specific?: string[],
): AttributesSpecMap => {
  if (!specific || specific.length === 0) {
    if (global) {
      return globalAttributes;
    }
    return emptyAttributes;
  }
  const specificAttributes = new Set(specific);
  return {
    has(name) {
      return globalAttributes.has(name) || specificAttributes.has(name);
    },
  };
};

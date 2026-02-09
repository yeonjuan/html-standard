import type { AttributesOptions, ElementOptions } from "../types/index.js";

export const DEFAULT_ATTRIBUTES_OPTIONS: AttributesOptions = {
  get(_: string) {
    return null;
  },
};

export const DEFAULT_ELEMENT_OPTIONS: ElementOptions = {
  attributes: {
    get(_: string) {
      return null;
    },
  },
};

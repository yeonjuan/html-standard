import { AttributesOptions, ElementOptions } from "../types";

export const DEFAULT_ATTRIBUTES_OPTIONS: AttributesOptions = {
  get(_) {
    return null;
  },
};

export const DEFAULT_ELEMENT_OPTIONS: ElementOptions = {
  attributes: {
    get(_) {
      return null;
    },
  },
};

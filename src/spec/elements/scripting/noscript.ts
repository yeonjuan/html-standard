import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const noscript: ElementSpec = {
  contents: {
    model: [], //TODO
  },
  attributes: attributes.globalOnly,
};

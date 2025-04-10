import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const col: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set(["span"]),
  },
};

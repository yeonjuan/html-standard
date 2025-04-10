import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const base: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set(["href", "target"]),
  },
};

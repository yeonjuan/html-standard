import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const track: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set(["kind", "src", "srclang", "label", "label", "default"]),
  },
};

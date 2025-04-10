import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const colgroup: ElementSpec = {
  contents: {
    model: null, // TODO
  },
  attributes: {
    global,
    specific: new Set(["span"]),
  },
};

import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const canvas: ElementSpec = {
  contents: {
    model: [
      // TODO
    ],
  },
  attributes: {
    global,
    specific: new Set(["width", "height"]),
  },
};

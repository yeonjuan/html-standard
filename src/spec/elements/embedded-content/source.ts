import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const source: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set([
      "type",
      "media",
      "src",
      "srcset",
      "sizes",
      "width",
      "height",
    ]),
  },
};

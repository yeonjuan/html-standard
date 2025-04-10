import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const img: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set([
      "alt",
      "src",
      "srcset",
      "sizes",
      "crossorigin",
      "usemap",
      "ismap",
      "width",
      "height",
      "referrerpolicy",
      "decoding",
      "loading",
      "fetchpriority",
    ]),
  },
};

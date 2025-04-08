import { ElementSpec } from "../types";

export const img: ElementSpec = {
  attributes: {
    global: true,
    specific: [
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
    ],
  },
};

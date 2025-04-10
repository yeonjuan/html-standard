import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const area: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set([
      "alt",
      "coords",
      "shape",
      "href",
      "target",
      "download",
      "ping",
      "rel",
      "referrerpolicy",
    ]),
  },
};

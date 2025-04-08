import { ElementSpec } from "../types";

export const area: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "alt",
      "coords",
      "shape",
      "href",
      "target",
      "download",
      "ping",
      "rel",
      "referrerpolicy",
    ],
  },
};

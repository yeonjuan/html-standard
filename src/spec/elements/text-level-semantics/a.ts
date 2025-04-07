import { ElementSpec } from "../types";

export const a: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "href",
      "target",
      "download",
      "ping",
      "rel",
      "hreflang",
      "type",
      "referrerpolicy",
    ],
  },
};

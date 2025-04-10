import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const link: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set([
      "href",
      "crossorigin",
      "rel",
      "media",
      "integrity",
      "hreflang",
      "type",
      "referrerpolicy",
      "sizes",
      "imagesrcset",
      "imagesizes",
      "as",
      "blocking",
      "color",
      "disabled",
      "fetchpriority",
      "title",
    ]),
  },
};

import { ElementSpec } from "../types";

export const link: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global: true,
    specific: [
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
    ],
  },
};

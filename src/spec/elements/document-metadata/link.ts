import { ElementSpec } from "../types";

export const link: ElementSpec = {
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

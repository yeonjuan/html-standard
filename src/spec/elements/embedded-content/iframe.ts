import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const iframe: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set([
      "src",
      "srcdoc",
      "name",
      "sandbox",
      "allow",
      "allowfullscreen",
      "width",
      "height",
      "referrerpolicy",
      "loading",
    ]),
  },
};

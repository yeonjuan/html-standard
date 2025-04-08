import { ElementSpec } from "../types";

export const iframe: ElementSpec = {
  attributes: {
    global: true,
    specific: [
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
    ],
  },
};

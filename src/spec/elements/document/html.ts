import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

// https://html.spec.whatwg.org/#the-html-element
export const html: ElementSpec = {
  attributes: {
    global: true,
    specific: attributes.empty,
  },
};

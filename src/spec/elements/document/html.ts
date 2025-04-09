import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

/**
 * @see https://html.spec.whatwg.org/#the-html-element
 */
export const html: ElementSpec = {
  contents: {
    model: [
      {
        rule: "required",
        name: ["head"],
      },
      {
        rule: "required",
        name: ["body"],
      },
    ],
  },
  attributes: attributes.globalOnly,
};

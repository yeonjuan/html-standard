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
        contents: new Set(["head"]),
      },
      {
        rule: "required",
        contents: new Set(["body"]),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

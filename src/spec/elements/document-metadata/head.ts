import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

/**
 * @see https://html.spec.whatwg.org/#the-html-element
 */
export const head: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.metadataContent,
        childrenConstraints: new Map([
          ["title", { required: true }],
          ["base", { max: 1 }],
        ]),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

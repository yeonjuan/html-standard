import { exclude } from "../../utils/exclude";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

const metadataContentsNotTitle = exclude(contents.metadataContent, "title");

/**
 * @see https://html.spec.whatwg.org/#the-html-element
 */
export const head: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        name: metadataContentsNotTitle,
      },
      {
        rule: "required",
        name: ["title"],
      },
      {
        rule: "zeroOrMore",
        name: metadataContentsNotTitle,
      },
    ],
  },
  attributes: attributes.globalOnly,
};

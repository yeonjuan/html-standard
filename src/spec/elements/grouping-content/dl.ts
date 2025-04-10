import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const dl: ElementSpec = {
  contents: {
    model: [
      {
        rule: "either",
        options: [
          [
            {
              rule: "zeroOrMore",
              contents: contents.scriptSupportingElements,
            },
            {
              rule: "oneOrMore",
              contents: new Set(["dt"]),
            },
            {
              rule: "zeroOrMore",
              contents: contents.scriptSupportingElements,
            },
            {
              rule: "oneOrMore",
              contents: new Set(["dd"]),
            },
            {
              rule: "zeroOrMore",
              contents: contents.scriptSupportingElements,
            },
          ],
          [
            {
              rule: "zeroOrMore",
              contents: contents.scriptSupportingElements,
            },
            {
              rule: "oneOrMore",
              contents: new Set(["div"]),
            },
            {
              rule: "zeroOrMore",
              contents: contents.scriptSupportingElements,
            },
          ],
        ],
      },
    ],
  },
  attributes: attributes.globalOnly,
};

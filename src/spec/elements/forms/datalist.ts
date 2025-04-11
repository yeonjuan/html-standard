import { addToSet } from "../../utils/set";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const datalist: ElementSpec = {
  contents: {
    model: [
      {
        rule: "either",
        options: [
          [
            {
              rule: "oneOrMore",
              contents: contents.phrasingContent,
            },
          ],
          [
            {
              rule: "zeroOrMore",
              contents: addToSet(contents.scriptSupportingElements, "option"),
            },
          ],
        ],
      },
    ],
  },
  attributes: attributes.globalOnly,
};

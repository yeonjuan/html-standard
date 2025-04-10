import { addToSet } from "../../utils/set";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const ul: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: addToSet(contents.scriptSupportingElements, "li"),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

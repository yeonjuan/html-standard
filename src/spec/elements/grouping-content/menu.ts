import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const menu: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: ["li", ...contents.scriptSupportingElements],
      },
    ],
  },
  attributes: attributes.globalOnly,
};

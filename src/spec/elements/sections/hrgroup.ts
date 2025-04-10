import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const hrgroup: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
      {
        rule: "zeroOrMore",
        contents: new Set(["p"]),
      },
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
      {
        rule: "required",
        contents: new Set(["h1", "h2", "h3", "h4", "h5", "h6"]),
      },
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
      {
        rule: "zeroOrMore",
        contents: new Set(["p"]),
      },
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
    ],
  },
  attributes: attributes.globalOnly,
};

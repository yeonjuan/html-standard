import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const picture: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
      {
        rule: "zeroOrMore",
        contents: new Set(["source"]),
      },
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
      {
        rule: "required",
        contents: new Set(["img"]),
      },
      {
        rule: "zeroOrMore",
        contents: contents.scriptSupportingElements,
      },
    ],
  },
  attributes: attributes.globalOnly,
};

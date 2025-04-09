import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const article: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        name: contents.flowContent,
      },
    ],
  },
  attributes: attributes.globalOnly,
};

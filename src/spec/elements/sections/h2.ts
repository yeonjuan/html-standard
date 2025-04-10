import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const h2: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
      },
    ],
  },
  attributes: attributes.globalOnly,
};

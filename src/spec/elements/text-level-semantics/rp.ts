import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const rp: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.text,
      },
    ],
  },
  attributes: attributes.globalOnly,
};

import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const caption: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
        descendantsConstraints: new Map([["table", { disallow: true }]]),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

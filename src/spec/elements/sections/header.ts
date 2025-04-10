import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const header: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
        descendantsConstraints: new Map([
          ["header", { disallow: true }],
          ["footer", { disallow: true }],
        ]),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

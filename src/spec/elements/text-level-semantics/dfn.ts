import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const dfn: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
        descendantsConstraints: new Map([["dfn", { disallow: true }]]),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["title"]),
  },
};

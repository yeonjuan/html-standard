import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const progress: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
        descendantsConstraints: new Map([["progress", { disallow: true }]]),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["value", "max"]),
  },
};

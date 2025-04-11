import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const output: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["for", "form", "name"]),
  },
};

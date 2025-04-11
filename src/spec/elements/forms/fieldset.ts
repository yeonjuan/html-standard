import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const fieldset: ElementSpec = {
  contents: {
    model: [
      {
        rule: "optional",
        contents: new Set("legend"),
      },
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["disabled", "form", "name"]),
  },
};

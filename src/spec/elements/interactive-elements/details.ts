import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const details: ElementSpec = {
  contents: {
    model: [
      {
        rule: "required",
        contents: new Set(["summary"]),
      },
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["name", "open"]),
  },
};

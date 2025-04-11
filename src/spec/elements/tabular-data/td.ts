import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const td: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["colspan", "rowspan", "headers"]),
  },
};

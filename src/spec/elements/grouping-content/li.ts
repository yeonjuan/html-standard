import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const li: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
      },
    ],
  },
  attributes: {
    global: true,
    specific: ["value"],
  },
};

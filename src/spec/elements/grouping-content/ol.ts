import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const ol: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: ["li", ...contents.scriptSupportingElements],
      },
    ],
  },
  attributes: {
    global: true,
    specific: ["reversed", "start", "type"],
  },
};

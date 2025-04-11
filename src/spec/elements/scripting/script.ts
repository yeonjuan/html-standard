import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const script: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: contents.text,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set([
      "src",
      "type",
      "nomodule",
      "async",
      "defer",
      "crossorigin",
      "integrity",
      "referrerpolicy",
      "blocking",
      "fetchpriority",
    ]),
  },
};

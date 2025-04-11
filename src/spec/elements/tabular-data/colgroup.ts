import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const colgroup: ElementSpec = {
  contents: {
    model: [
      {
        rule: "conditional",
        conditions: [
          {
            ifAttributes(attributes) {
              return !!attributes["span"];
            },
            model: null,
          },
          {
            ifAttributes(attributes) {
              return !attributes["span"];
            },
            model: [
              {
                rule: "zeroOrMore",
                contents: new Set(["col", "template"]),
              },
            ],
          },
        ],
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["span"]),
  },
};

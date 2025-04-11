import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const meter: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
        descendantsConstraints: new Map([
          [
            "meter",
            {
              disallow: true,
            },
          ],
        ]),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["value", "min", "max", "low", "high", "optimum"]),
  },
};

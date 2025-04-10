import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const time: ElementSpec = {
  contents: {
    model: [
      {
        rule: "either",
        options: [
          [
            {
              rule: "oneOrMore",
              contents: contents.phrasingContent,
            },
          ],
          [
            {
              rule: "oneOrMore",
              contents: contents.text,
            },
          ],
        ],
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["datetime"]),
  },
};

import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const figure: ElementSpec = {
  contents: {
    model: [
      {
        rule: "either",
        options: [
          [
            {
              rule: "required",
              contents: new Set("figcaption"),
            },
            {
              rule: "oneOrMore",
              contents: contents.flowContent,
            },
          ],
          [
            {
              rule: "oneOrMore",
              contents: contents.flowContent,
            },
            {
              rule: "required",
              contents: new Set("figcaption"),
            },
          ],
          [
            {
              rule: "oneOrMore",
              contents: contents.flowContent,
            },
          ],
        ],
      },
    ],
  },
  attributes: attributes.globalOnly,
};

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const figureSpec: ElementSpec = {
  contents: [
    {
      type: "either",
      options: [
        [
          {
            type: "required",
            contents: new Set("figcaption"),
          },
          {
            type: "oneOrMore",
            contents: contents.flowContent,
          },
        ],
        [
          {
            type: "oneOrMore",
            contents: contents.flowContent,
          },
          {
            type: "required",
            contents: new Set("figcaption"),
          },
        ],
        [
          {
            type: "oneOrMore",
            contents: contents.flowContent,
          },
        ],
      ],
    },
  ],
  attributes: contentAttributes(true),
};

export const figure: GetElementSpec = () => figureSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

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
            contents: contentsPreset.flowContent,
          },
        ],
        [
          {
            type: "oneOrMore",
            contents: contentsPreset.flowContent,
          },
          {
            type: "required",
            contents: contents.fromKeys("figcaption"),
          },
        ],
        [
          {
            type: "oneOrMore",
            contents: contentsPreset.flowContent,
          },
        ],
      ],
    },
  ],
  attributes: contentAttributes(true),
};

export const figure: GetElementSpec = () => figureSpec;

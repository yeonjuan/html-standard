import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const datalistSpec: ElementSpec = {
  contents: [
    {
      type: "either",
      options: [
        [
          {
            type: "oneOrMore",
            contents: contentsPreset.phrasingContent,
          },
        ],
        [
          {
            type: "zeroOrMore",
            contents: contents.fromSet(
              contentsPreset.scriptSupportingElements,
              "option",
            ),
          },
        ],
      ],
    },
  ],
  attributes: contentAttributes(true),
};

export const datalist: GetElementSpec = () => datalistSpec;

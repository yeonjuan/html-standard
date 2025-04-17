import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const dlSpec: ElementSpec = {
  contents: [
    {
      type: "either",
      options: [
        [
          {
            type: "zeroOrMore",
            contents: contentsPreset.scriptSupportingElements,
          },
          {
            type: "oneOrMore",
            contents: new Set(["dt"]),
          },
          {
            type: "zeroOrMore",
            contents: contentsPreset.scriptSupportingElements,
          },
          {
            type: "oneOrMore",
            contents: new Set(["dd"]),
          },
          {
            type: "zeroOrMore",
            contents: contentsPreset.scriptSupportingElements,
          },
        ],
        [
          {
            type: "zeroOrMore",
            contents: contentsPreset.scriptSupportingElements,
          },
          {
            type: "oneOrMore",
            contents: new Set(["div"]),
          },
          {
            type: "zeroOrMore",
            contents: contentsPreset.scriptSupportingElements,
          },
        ],
      ],
    },
  ],
  attributes: contentAttributes(true),
};

export const dl: GetElementSpec = () => dlSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const tableSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "optional",
      contents: contents.fromKeys("caption"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("colgroup"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "optional",
      contents: contents.fromKeys("thead"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "either",
      options: [
        [
          {
            type: "zeroOrMore",
            contents: contents.fromKeys("tbody"),
          },
        ],
        [
          {
            type: "oneOrMore",
            contents: contents.fromKeys("tr"),
          },
        ],
      ],
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "optional",
      contents: contents.fromKeys("tfoot"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
  ],
  attributes: contentAttributes(true),
};

export const table: GetElementSpec = () => tableSpec;

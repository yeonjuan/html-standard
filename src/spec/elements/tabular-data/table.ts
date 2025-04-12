import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const tableSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "optional",
      contents: new Set(["caption"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: new Set(["colgroup"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "optional",
      contents: new Set(["thead"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "either",
      options: [
        [
          {
            type: "zeroOrMore",
            contents: new Set(["tbody"]),
          },
        ],
        [
          {
            type: "oneOrMore",
            contents: new Set(["tr"]),
          },
        ],
      ],
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "optional",
      contents: new Set(["tfoot"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
  ],
  attributes: contentAttributes(true),
};

export const table: GetElementSpec = () => tableSpec;

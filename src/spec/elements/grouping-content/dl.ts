import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const dlSpec: ElementSpec = {
  contents: [
    {
      type: "either",
      options: [
        [
          {
            type: "zeroOrMore",
            contents: contents.scriptSupportingElements,
          },
          {
            type: "oneOrMore",
            contents: new Set(["dt"]),
          },
          {
            type: "zeroOrMore",
            contents: contents.scriptSupportingElements,
          },
          {
            type: "oneOrMore",
            contents: new Set(["dd"]),
          },
          {
            type: "zeroOrMore",
            contents: contents.scriptSupportingElements,
          },
        ],
        [
          {
            type: "zeroOrMore",
            contents: contents.scriptSupportingElements,
          },
          {
            type: "oneOrMore",
            contents: new Set(["div"]),
          },
          {
            type: "zeroOrMore",
            contents: contents.scriptSupportingElements,
          },
        ],
      ],
    },
  ],
  attributes: contentAttributes(true),
};

export const dl: GetElementSpec = () => dlSpec;

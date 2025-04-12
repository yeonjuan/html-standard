import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const hrgroupSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: new Set(["p"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "required",
      contents: new Set(["h1", "h2", "h3", "h4", "h5", "h6"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: new Set(["p"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
  ],
  attributes: contentAttributes(true),
};

export const hrgroup: GetElementSpec = () => hrgroupSpec;

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const pictureSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: new Set(["source"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "required",
      contents: new Set(["img"]),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
  ],
  attributes: contentAttributes(true),
};

export const picture: GetElementSpec = () => pictureSpec;

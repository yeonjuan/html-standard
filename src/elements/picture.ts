import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const pictureSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("source"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "required",
      contents: contents.fromKeys("img"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
  ],
  attributes: contentAttributes(true),
};

export const picture: GetElementSpec = () => pictureSpec;

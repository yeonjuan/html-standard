import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const objectSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
    },
  ],
  attributes: contentAttributes(true, [
    "data",
    "type",
    "name",
    "form",
    "width",
    "height",
  ]),
};

export const object: GetElementSpec = () => objectSpec;

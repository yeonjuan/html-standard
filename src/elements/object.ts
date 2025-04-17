import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const objectSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
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

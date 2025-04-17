import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const rpSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true),
};

export const rp: GetElementSpec = () => rpSpec;

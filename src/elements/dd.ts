import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const ddSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const dd: GetElementSpec = () => ddSpec;

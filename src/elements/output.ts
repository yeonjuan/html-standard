import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const outputSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
    },
  ],
  attributes: contentAttributes(true, ["for", "form", "name"]),
};

export const output: GetElementSpec = () => outputSpec;

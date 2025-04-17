import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const abbrSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const abbr: GetElementSpec = () => abbrSpec;

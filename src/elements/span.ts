import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const spanSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const span: GetElementSpec = () => spanSpec;

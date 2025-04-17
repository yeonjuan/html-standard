import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const h1Spec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const h1: GetElementSpec = () => h1Spec;

import { contentsPreset } from "../helpers";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const mainSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const main: GetElementSpec = () => mainSpec;

import type { ElementSpec, GetElementSpec } from "../types";
import { contentsPreset } from "../helpers";
import { contentAttributes } from "../helpers";

const insSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["cite", "datetime"]),
};

export const ins: GetElementSpec = () => insSpec;

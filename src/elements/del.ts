import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const delSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["cite", "datetime"]),
};

export const del: GetElementSpec = () => delSpec;

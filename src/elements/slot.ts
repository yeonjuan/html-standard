import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const slotSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["name"]),
};

export const slot: GetElementSpec = () => slotSpec;

import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const noscriptSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true),
};

export const noscript: GetElementSpec = () => noscriptSpec;

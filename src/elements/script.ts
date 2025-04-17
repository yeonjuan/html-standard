import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const scriptSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true, [
    "src",
    "type",
    "nomodule",
    "async",
    "defer",
    "crossorigin",
    "integrity",
    "referrerpolicy",
    "blocking",
    "fetchpriority",
  ]),
};

export const script: GetElementSpec = () => scriptSpec;

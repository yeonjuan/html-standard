import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const styleSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true, ["media", "blocking", "title"]),
};

export const style: GetElementSpec = () => styleSpec;

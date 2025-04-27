import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const titleSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true),
};

export const title: GetElementSpec = () => titleSpec;

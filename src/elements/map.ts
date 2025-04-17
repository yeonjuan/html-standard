import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const mapSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["name"]),
};

export const map: GetElementSpec = () => mapSpec;

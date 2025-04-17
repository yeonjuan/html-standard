import { contentsPreset } from "../helpers";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const sampSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const samp: GetElementSpec = () => sampSpec;

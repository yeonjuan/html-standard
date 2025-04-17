import { contents, contentsPreset } from "../helpers";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const detailsSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: contents.fromKeys("summary"),
    },
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["name", "open"]),
};

export const details: GetElementSpec = () => detailsSpec;

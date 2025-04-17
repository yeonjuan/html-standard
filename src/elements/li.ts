import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const liInMenuOrUl: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

const liNotInMenuOrUl: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["value"]),
};

export const li: GetElementSpec = (state) => {
  const parent = state?.parent;
  if (parent === "menu" || parent === "ul") {
    return liInMenuOrUl;
  }
  return liNotInMenuOrUl;
};

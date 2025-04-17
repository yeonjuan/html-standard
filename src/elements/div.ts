import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const divChildOfDlSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "oneOrMore",
      contents: contents.fromKeys("dt"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "oneOrMore",
      contents: contents.fromKeys("dd"),
    },
  ],
  attributes: contentAttributes(true),
};

const divSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const div: GetElementSpec = (state) => {
  const parent = state?.parent;
  if (parent === "dl") {
    return divChildOfDlSpec;
  }
  return divSpec;
};

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const attributes = contentAttributes(true, [
  "disabled",
  "label",
  "selected",
  "value",
]);

const optionWithLabelAndValueSpec: ElementSpec = {
  contents: null,
  attributes,
};

const optionWithLabelSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: contentsPreset.text,
    },
  ],
  attributes,
};
const optionWithoutLabelAndValueSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.text,
    },
  ],
  attributes,
};

export const option: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (attributes["label"] && attributes["value"]) {
    return optionWithLabelAndValueSpec;
  }
  if (attributes["label"]) {
    return optionWithLabelSpec;
  }
  return optionWithoutLabelAndValueSpec;
};

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

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
      contents: contents.text,
    },
  ],
  attributes,
};
const optionWithoutLabelAndValueSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.text,
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

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const attributes = contentAttributes(true, [
  "disabled",
  "label",
  "selected",
  "value",
]);

const optionWithLabelAndValueSpec: ElementSpec = {
  attributes,
};

const optionWithLabelSpec: ElementSpec = {
  attributes,
};
const optionWithoutLabelAndValueSpec: ElementSpec = {
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

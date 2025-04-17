import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const textareaSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true, [
    "autocomplete",
    "cols",
    "dirname",
    "disabled",
    "form",
    "maxlength",
    "minlength",
    "name",
    "placeholder",
    "readonly",
    "required",
    "rows",
    "wrap",
  ]),
};

export const textarea: GetElementSpec = () => textareaSpec;

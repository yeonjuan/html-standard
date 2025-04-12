import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const textareaSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.text,
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

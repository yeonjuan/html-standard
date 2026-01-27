import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const textareaSpec: ElementSpec = {
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

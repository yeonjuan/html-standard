import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const inputSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "accept",
    "alpha",
    "alt",
    "autocomplete",
    "checked",
    "colorspace",
    "dirname",
    "disabled",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "height",
    "list",
    "max",
    "maxlength",
    "min",
    "minlength",
    "multiple",
    "name",
    "pattern",
    "placeholder",
    "popovertarget",
    "popovertargetaction",
    "readonly",
    "required",
    "size",
    "src",
    "step",
    "type",
    "value",
    "width",
    "title",
  ]),
};

export const input: GetElementSpec = () => inputSpec;

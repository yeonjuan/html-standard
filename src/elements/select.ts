import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const selectSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "autocomplete",
    "disabled",
    "form",
    "multiple",
    "name",
    "required",
    "size",
  ]),
};

export const select: GetElementSpec = () => selectSpec;

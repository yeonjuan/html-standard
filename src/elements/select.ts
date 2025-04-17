import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset, contents } from "../helpers";

const selectSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(
        contentsPreset.scriptSupportingElements,
        "option",
        "optgroup",
        "hr",
      ),
    },
  ],
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

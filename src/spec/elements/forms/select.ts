import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const selectSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(
        contents.scriptSupportingElements,
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

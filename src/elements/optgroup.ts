import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset, contents } from "../helpers";

const optgroupSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(
        contentsPreset.scriptSupportingElements,
        "option",
      ),
    },
  ],
  attributes: contentAttributes(true, ["disabled", "label"]),
};

export const optgroup: GetElementSpec = () => optgroupSpec;

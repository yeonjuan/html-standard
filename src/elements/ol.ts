import { ElementSpec, GetElementSpec } from "../types";
import { contents, contentsPreset, contentAttributes } from "../helpers";

const olSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(contentsPreset.scriptSupportingElements, "li"),
    },
  ],
  attributes: contentAttributes(true, ["reversed", "start", "type"]),
};

export const ol: GetElementSpec = () => olSpec;

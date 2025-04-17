import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const ulSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(contentsPreset.scriptSupportingElements, "li"),
    },
  ],
  attributes: contentAttributes(true),
};

export const ul: GetElementSpec = () => ulSpec;

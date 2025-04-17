import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const theadSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(contentsPreset.scriptSupportingElements, "tr"),
    },
  ],
  attributes: contentAttributes(true),
};

export const thead: GetElementSpec = () => theadSpec;

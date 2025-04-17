import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const trSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(
        contentsPreset.scriptSupportingElements,
        "td",
        "th",
      ),
    },
  ],
  attributes: contentAttributes(true),
};

export const tr: GetElementSpec = () => trSpec;

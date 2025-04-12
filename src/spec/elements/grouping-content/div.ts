import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const divChildOfDlSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "oneOrMore",
      contents: new Set("dt"),
    },
    {
      type: "zeroOrMore",
      contents: contents.scriptSupportingElements,
    },
    {
      type: "oneOrMore",
      contents: new Set("dd"),
    },
  ],
  attributes: contentAttributes(true),
};

const divSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const div: GetElementSpec = (state) => {
  const parent = state?.parent;
  if (parent === "dl") {
    return divChildOfDlSpec;
  }
  return divSpec;
};

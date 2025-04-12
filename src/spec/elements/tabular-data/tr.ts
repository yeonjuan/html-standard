import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const trSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(contents.scriptSupportingElements, "td", "th"),
    },
  ],
  attributes: contentAttributes(true),
};

export const tr: GetElementSpec = () => trSpec;

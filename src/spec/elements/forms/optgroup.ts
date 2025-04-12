import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const optgroupSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(contents.scriptSupportingElements, "option"),
    },
  ],
  attributes: contentAttributes(true, ["disabled", "label"]),
};

export const optgroup: GetElementSpec = () => optgroupSpec;

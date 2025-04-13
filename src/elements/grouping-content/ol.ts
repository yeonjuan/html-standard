import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const olSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(contents.scriptSupportingElements, "li"),
    },
  ],
  attributes: contentAttributes(true, ["reversed", "start", "type"]),
};

export const ol: GetElementSpec = () => olSpec;

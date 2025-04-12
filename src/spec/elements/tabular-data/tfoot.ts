import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const tfootSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(contents.scriptSupportingElements, "tr"),
    },
  ],
  attributes: contentAttributes(true),
};

export const tfoot: GetElementSpec = () => tfootSpec;

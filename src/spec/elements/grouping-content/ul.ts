import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const ulSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(contents.scriptSupportingElements, "li"),
    },
  ],
  attributes: contentAttributes(true),
};

export const ul: GetElementSpec = () => ulSpec;

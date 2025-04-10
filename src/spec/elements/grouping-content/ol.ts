import { global } from "../common/attributes";
import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const ol: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: addToSet(contents.scriptSupportingElements, "li"),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["reversed", "start", "type"]),
  },
};

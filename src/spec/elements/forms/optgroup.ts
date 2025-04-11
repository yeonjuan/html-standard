import { addToSet } from "../../utils/set";
import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const optgroup: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: addToSet(contents.scriptSupportingElements, "option"),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["disabled", "label"]),
  },
};

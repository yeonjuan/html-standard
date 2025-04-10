import { addToSet } from "../../utils/set";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const ruby: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: addToSet(contents.phrasingContent, "rt", "rp"),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

import { unionSets } from "../../utils/set";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const legend: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: unionSets(contents.phrasingContent, contents.headingContent),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const rubySpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: addToSet(contents.phrasingContent, "rt", "rp"),
    },
  ],
  attributes: contentAttributes(true),
};

export const ruby: GetElementSpec = () => rubySpec;

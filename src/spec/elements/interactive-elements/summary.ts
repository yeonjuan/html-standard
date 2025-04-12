import { unionSets } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const summarySpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: unionSets(contents.phrasingContent, contents.headingContent),
    },
  ],
  attributes: contentAttributes(true),
};

export const summary: GetElementSpec = () => summarySpec;

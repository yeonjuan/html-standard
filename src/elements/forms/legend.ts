import { unionSets } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const legendSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: unionSets(contents.phrasingContent, contents.headingContent),
    },
  ],
  attributes: contentAttributes(true),
};

export const legend: GetElementSpec = () => legendSpec;

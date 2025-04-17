import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const legendSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromUnionSets(
        contentsPreset.phrasingContent,
        contentsPreset.headingContent,
      ),
    },
  ],
  attributes: contentAttributes(true),
};

export const legend: GetElementSpec = () => legendSpec;

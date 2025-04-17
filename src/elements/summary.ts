import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const summarySpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.fromUnionSets(
        contentsPreset.phrasingContent,
        contentsPreset.headingContent,
      ),
    },
  ],
  attributes: contentAttributes(true),
};

export const summary: GetElementSpec = () => summarySpec;

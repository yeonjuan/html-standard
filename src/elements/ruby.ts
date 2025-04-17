import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const rubySpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromSet(contentsPreset.phrasingContent, "rt", "rp"),
    },
  ],
  attributes: contentAttributes(true),
};

export const ruby: GetElementSpec = () => rubySpec;

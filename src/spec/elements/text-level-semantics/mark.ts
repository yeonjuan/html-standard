import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const markSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const mark: GetElementSpec = () => markSpec;

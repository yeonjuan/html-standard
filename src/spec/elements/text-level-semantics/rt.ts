import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const rtSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const rt: GetElementSpec = () => rtSpec;

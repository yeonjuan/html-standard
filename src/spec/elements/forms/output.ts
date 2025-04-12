import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const outputSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
    },
  ],
  attributes: contentAttributes(true, ["for", "form", "name"]),
};

export const output: GetElementSpec = () => outputSpec;

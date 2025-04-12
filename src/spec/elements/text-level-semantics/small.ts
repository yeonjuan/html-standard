import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const smallSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const small: GetElementSpec = () => smallSpec;

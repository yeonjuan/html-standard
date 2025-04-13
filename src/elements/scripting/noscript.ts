import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const noscriptSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.text,
    },
  ],
  attributes: contentAttributes(true),
};

export const noscript: GetElementSpec = () => noscriptSpec;

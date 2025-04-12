import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const ddSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const dd: GetElementSpec = () => ddSpec;

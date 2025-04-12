import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const rpSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.text,
    },
  ],
  attributes: contentAttributes(true),
};

export const rp: GetElementSpec = () => rpSpec;

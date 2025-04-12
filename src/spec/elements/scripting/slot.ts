import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const slotSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["name"]),
};

export const slot: GetElementSpec = () => slotSpec;

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const insSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["cite", "datetime"]),
};

export const ins: GetElementSpec = () => insSpec;

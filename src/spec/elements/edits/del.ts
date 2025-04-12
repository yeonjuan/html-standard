import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const delSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["cite", "datetime"]),
};

export const del: GetElementSpec = () => delSpec;

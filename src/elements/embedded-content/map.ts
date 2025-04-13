import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const mapSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
    },
  ],
  attributes: contentAttributes(true, ["name"]),
};

export const map: GetElementSpec = () => mapSpec;

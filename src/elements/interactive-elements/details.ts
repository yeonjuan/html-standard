import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const detailsSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: new Set(["summary"]),
    },
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["name", "open"]),
};

export const details: GetElementSpec = () => detailsSpec;

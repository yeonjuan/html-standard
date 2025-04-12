import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const tdSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["colspan", "rowspan", "headers"]),
};

export const td: GetElementSpec = () => tdSpec;

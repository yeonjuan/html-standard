import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const asideSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

export const aside: GetElementSpec = () => asideSpec;

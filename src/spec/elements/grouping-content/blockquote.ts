import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const blockquoteSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["cite"]),
};

export const blockquote: GetElementSpec = () => blockquoteSpec;

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const headSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.metadataContent,
      constraints: {
        children: new Map([
          ["title", { required: true }],
          ["base", { max: 1 }],
        ]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const head: GetElementSpec = () => headSpec;

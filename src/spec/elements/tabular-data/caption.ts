import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const captionSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
      constraints: {
        descendants: new Map([["table", { disallow: true }]]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const caption: GetElementSpec = () => captionSpec;

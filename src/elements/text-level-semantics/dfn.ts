import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const dfnSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
      constraints: {
        descendants: new Map([["dfn", { disallow: true }]]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const dfn: GetElementSpec = () => dfnSpec;

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const labelSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
      constraints: {
        descendants: new Map([["label", { disallow: true }]]),
      },
    },
  ],
  attributes: contentAttributes(true, ["for"]),
};

export const label: GetElementSpec = () => labelSpec;

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const progressSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
      constraints: {
        descendants: new Map([["progress", { disallow: true }]]),
      },
    },
  ],
  attributes: contentAttributes(true, ["value", "max"]),
};

export const progress: GetElementSpec = () => progressSpec;

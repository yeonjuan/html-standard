import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const headerSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
      constraints: {
        descendants: new Map([
          ["header", { disallow: true }],
          ["footer", { disallow: true }],
        ]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const header: GetElementSpec = () => headerSpec;

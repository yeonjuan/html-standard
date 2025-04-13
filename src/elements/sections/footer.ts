import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const footerSpec: ElementSpec = {
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

export const footer: GetElementSpec = () => footerSpec;

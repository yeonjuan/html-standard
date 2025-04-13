import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const scriptSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.text,
    },
  ],
  attributes: contentAttributes(true, [
    "src",
    "type",
    "nomodule",
    "async",
    "defer",
    "crossorigin",
    "integrity",
    "referrerpolicy",
    "blocking",
    "fetchpriority",
  ]),
};

export const script: GetElementSpec = () => scriptSpec;

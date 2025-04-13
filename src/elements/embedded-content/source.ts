import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const sourceSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "type",
    "media",
    "src",
    "srcset",
    "sizes",
    "width",
    "height",
  ]),
};

export const source: GetElementSpec = () => sourceSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const sourceSpec: ElementSpec = {
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

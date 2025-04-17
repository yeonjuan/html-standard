import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const imgSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "alt",
    "src",
    "srcset",
    "sizes",
    "crossorigin",
    "usemap",
    "ismap",
    "width",
    "height",
    "referrerpolicy",
    "decoding",
    "loading",
    "fetchpriority",
  ]),
};

export const img: GetElementSpec = () => imgSpec;

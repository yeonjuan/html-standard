import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const iframeSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "src",
    "srcdoc",
    "name",
    "sandbox",
    "allow",
    "allowfullscreen",
    "width",
    "height",
    "referrerpolicy",
    "loading",
  ]),
};

export const iframe: GetElementSpec = () => iframeSpec;

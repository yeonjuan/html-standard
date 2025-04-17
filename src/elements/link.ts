import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const linkSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "href",
    "crossorigin",
    "rel",
    "media",
    "integrity",
    "hreflang",
    "type",
    "referrerpolicy",
    "sizes",
    "imagesrcset",
    "imagesizes",
    "as",
    "blocking",
    "color",
    "disabled",
    "fetchpriority",
    "title",
  ]),
};

export const link: GetElementSpec = () => linkSpec;

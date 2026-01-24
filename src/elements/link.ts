import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const linkSpec: ElementSpec = {
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

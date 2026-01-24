import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const aSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "href",
    "target",
    "download",
    "ping",
    "rel",
    "hreflang",
    "type",
    "referrerpolicy",
  ]),
};

export const a: GetElementSpec = () => aSpec;

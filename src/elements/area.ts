import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const areaSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "alt",
    "coords",
    "shape",
    "href",
    "target",
    "download",
    "ping",
    "rel",
    "referrerpolicy",
  ]),
};

export const area: GetElementSpec = () => areaSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const areaSpec: ElementSpec = {
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

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const thSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "colspan",
    "rowspan",
    "headers",
    "scope",
    "abbr",
  ]),
};

export const th: GetElementSpec = () => thSpec;

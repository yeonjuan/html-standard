import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const objectSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "data",
    "type",
    "name",
    "form",
    "width",
    "height",
  ]),
};

export const object: GetElementSpec = () => objectSpec;

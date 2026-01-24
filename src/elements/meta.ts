import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const metaSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "name",
    "http-equiv",
    "content",
    "charset",
    "media",
  ]),
};

export const meta: GetElementSpec = () => metaSpec;

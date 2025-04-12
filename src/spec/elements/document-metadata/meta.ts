import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const metaSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "name",
    "http-equiv",
    "content",
    "charset",
    "media",
  ]),
};

export const meta: GetElementSpec = () => metaSpec;

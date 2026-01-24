import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const attributes = contentAttributes(true, ["span"]);

const colgroupWithSpanSpec: ElementSpec = {
  attributes,
};
const colgroupWithoutSpanSpec: ElementSpec = {
  attributes,
};

export const colgroup: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (attributes["span"]) {
    return colgroupWithSpanSpec;
  }
  return colgroupWithoutSpanSpec;
};

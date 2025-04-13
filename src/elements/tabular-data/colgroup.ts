import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const attributes = contentAttributes(true, ["span"]);

const colgroupWithSpanSpec: ElementSpec = {
  contents: null,
  attributes,
};
const colgroupWithoutSpanSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: new Set(["col", "template"]),
    },
  ],
  attributes,
};

export const colgroup: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (attributes["span"]) {
    return colgroupWithSpanSpec;
  }
  return colgroupWithoutSpanSpec;
};

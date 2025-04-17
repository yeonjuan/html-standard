import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents } from "../helpers";

const attributes = contentAttributes(true, ["span"]);

const colgroupWithSpanSpec: ElementSpec = {
  contents: null,
  attributes,
};
const colgroupWithoutSpanSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("col", "template"),
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

import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const liInMenuOrUl: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true),
};

const liNotInMenuOrUl: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["value"]),
};

export const li: GetElementSpec = (state) => {
  const parent = state?.parent;
  if (parent === "menu" || parent === "ul") {
    return liInMenuOrUl;
  }
  return liNotInMenuOrUl;
};

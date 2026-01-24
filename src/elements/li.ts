import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const liInMenuOrUl: ElementSpec = {
  attributes: contentAttributes(true),
};

const liNotInMenuOrUl: ElementSpec = {
  attributes: contentAttributes(true, ["value"]),
};

export const li: GetElementSpec = (state) => {
  const parent = state?.parent;
  if (parent === "menu" || parent === "ul") {
    return liInMenuOrUl;
  }
  return liNotInMenuOrUl;
};

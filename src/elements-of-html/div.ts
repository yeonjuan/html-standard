import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const divChildOfDlSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

const divSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const div: GetElementSpec = (state) => {
  const parent = state?.parent;
  if (parent === "dl") {
    return divChildOfDlSpec;
  }
  return divSpec;
};

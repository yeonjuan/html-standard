import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const detailsSpec: ElementSpec = {
  attributes: contentAttributes(true, ["name", "open"]),
};

export const details: GetElementSpec = () => detailsSpec;

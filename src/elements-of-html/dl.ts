import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const dlSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const dl: GetElementSpec = () => dlSpec;

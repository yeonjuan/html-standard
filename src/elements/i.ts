import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const iSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const i: GetElementSpec = () => iSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const datalistSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const datalist: GetElementSpec = () => datalistSpec;

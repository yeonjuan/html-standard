import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const citeSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const cite: GetElementSpec = () => citeSpec;

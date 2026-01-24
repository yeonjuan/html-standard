import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const ddSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const dd: GetElementSpec = () => ddSpec;

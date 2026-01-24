import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const bSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const b: GetElementSpec = () => bSpec;

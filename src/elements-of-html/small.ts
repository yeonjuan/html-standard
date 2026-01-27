import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const smallSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const small: GetElementSpec = () => smallSpec;

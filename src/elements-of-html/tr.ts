import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const trSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const tr: GetElementSpec = () => trSpec;

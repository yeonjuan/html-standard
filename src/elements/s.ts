import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const sSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const s: GetElementSpec = () => sSpec;

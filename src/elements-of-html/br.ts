import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const brSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const br: GetElementSpec = () => brSpec;

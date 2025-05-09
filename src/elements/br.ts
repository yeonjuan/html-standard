import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const brSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true),
};

export const br: GetElementSpec = () => brSpec;

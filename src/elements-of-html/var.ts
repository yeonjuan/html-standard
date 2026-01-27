import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const varSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const _var: GetElementSpec = () => varSpec;

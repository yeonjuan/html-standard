import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const pSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const p: GetElementSpec = () => pSpec;

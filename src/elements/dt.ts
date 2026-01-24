import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const dtSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const dt: GetElementSpec = () => dtSpec;

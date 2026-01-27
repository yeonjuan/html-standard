import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const mainSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const main: GetElementSpec = () => mainSpec;

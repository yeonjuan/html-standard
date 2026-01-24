import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const subSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const sub: GetElementSpec = () => subSpec;

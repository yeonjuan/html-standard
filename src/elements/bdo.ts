import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const bdoSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const bdo: GetElementSpec = () => bdoSpec;

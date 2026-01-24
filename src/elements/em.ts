import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const emSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const em: GetElementSpec = () => emSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const rtSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const rt: GetElementSpec = () => rtSpec;

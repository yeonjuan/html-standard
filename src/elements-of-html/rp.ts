import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const rpSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const rp: GetElementSpec = () => rpSpec;

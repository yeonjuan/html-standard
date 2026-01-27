import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const tfootSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const tfoot: GetElementSpec = () => tfootSpec;

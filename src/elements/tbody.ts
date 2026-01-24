import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const tbodySpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const tbody: GetElementSpec = () => tbodySpec;

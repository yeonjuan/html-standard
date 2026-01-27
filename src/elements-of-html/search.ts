import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const searchSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const search: GetElementSpec = () => searchSpec;

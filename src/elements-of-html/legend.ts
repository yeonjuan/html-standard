import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const legendSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const legend: GetElementSpec = () => legendSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const markSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const mark: GetElementSpec = () => markSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const strongSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const strong: GetElementSpec = () => strongSpec;

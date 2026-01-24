import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const preSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const pre: GetElementSpec = () => preSpec;

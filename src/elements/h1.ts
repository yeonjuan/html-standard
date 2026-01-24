import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const h1Spec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const h1: GetElementSpec = () => h1Spec;

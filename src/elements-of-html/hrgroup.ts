import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const hrgroupSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const hrgroup: GetElementSpec = () => hrgroupSpec;

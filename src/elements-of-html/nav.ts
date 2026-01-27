import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const navSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const nav: GetElementSpec = () => navSpec;

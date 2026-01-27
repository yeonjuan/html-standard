import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const menuSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const menu: GetElementSpec = () => menuSpec;

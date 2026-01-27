import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const ulSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const ul: GetElementSpec = () => ulSpec;

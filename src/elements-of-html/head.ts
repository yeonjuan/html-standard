import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const headSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const head: GetElementSpec = () => headSpec;

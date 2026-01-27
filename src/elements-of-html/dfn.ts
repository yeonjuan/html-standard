import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const dfnSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const dfn: GetElementSpec = () => dfnSpec;

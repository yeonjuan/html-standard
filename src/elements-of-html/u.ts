import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const uSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const u: GetElementSpec = () => uSpec;

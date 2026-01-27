import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const abbrSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const abbr: GetElementSpec = () => abbrSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const wbrSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true),
};

export const wbr: GetElementSpec = () => wbrSpec;

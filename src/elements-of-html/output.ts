import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const outputSpec: ElementSpec = {
  attributes: contentAttributes(true, ["for", "form", "name"]),
};

export const output: GetElementSpec = () => outputSpec;

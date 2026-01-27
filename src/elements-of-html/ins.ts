import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const insSpec: ElementSpec = {
  attributes: contentAttributes(true, ["cite", "datetime"]),
};

export const ins: GetElementSpec = () => insSpec;

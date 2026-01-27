import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const delSpec: ElementSpec = {
  attributes: contentAttributes(true, ["cite", "datetime"]),
};

export const del: GetElementSpec = () => delSpec;

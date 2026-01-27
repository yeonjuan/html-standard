import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const progressSpec: ElementSpec = {
  attributes: contentAttributes(true, ["value", "max"]),
};

export const progress: GetElementSpec = () => progressSpec;

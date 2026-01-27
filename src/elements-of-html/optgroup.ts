import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const optgroupSpec: ElementSpec = {
  attributes: contentAttributes(true, ["disabled", "label"]),
};

export const optgroup: GetElementSpec = () => optgroupSpec;

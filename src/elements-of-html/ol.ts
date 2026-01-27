import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const olSpec: ElementSpec = {
  attributes: contentAttributes(true, ["reversed", "start", "type"]),
};

export const ol: GetElementSpec = () => olSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const labelSpec: ElementSpec = {
  attributes: contentAttributes(true, ["for"]),
};

export const label: GetElementSpec = () => labelSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const dataSpec: ElementSpec = {
  attributes: contentAttributes(true, ["value"]),
};

export const data: GetElementSpec = () => dataSpec;

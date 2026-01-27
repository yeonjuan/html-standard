import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const colSpec: ElementSpec = {
  attributes: contentAttributes(true, ["span"]),
};

export const col: GetElementSpec = () => colSpec;

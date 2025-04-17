import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const colSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, ["span"]),
};

export const col: GetElementSpec = () => colSpec;

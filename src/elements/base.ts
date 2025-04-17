import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const baseSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, ["href", "target"]),
};

export const base: GetElementSpec = () => baseSpec;

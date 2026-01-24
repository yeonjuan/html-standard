import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const baseSpec: ElementSpec = {
  attributes: contentAttributes(true, ["href", "target"]),
};

export const base: GetElementSpec = () => baseSpec;

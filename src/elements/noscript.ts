import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const noscriptSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const noscript: GetElementSpec = () => noscriptSpec;

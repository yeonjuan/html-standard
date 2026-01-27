import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const htmlSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const html: GetElementSpec = () => htmlSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const kbdSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const kbd: GetElementSpec = () => kbdSpec;

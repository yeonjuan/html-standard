import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const slotSpec: ElementSpec = {
  attributes: contentAttributes(true, ["name"]),
};

export const slot: GetElementSpec = () => slotSpec;

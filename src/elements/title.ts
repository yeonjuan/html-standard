import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const titleSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const title: GetElementSpec = () => titleSpec;

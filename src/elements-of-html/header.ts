import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const headerSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const header: GetElementSpec = () => headerSpec;

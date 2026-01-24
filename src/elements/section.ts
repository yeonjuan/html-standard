import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const sectionSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const section: GetElementSpec = () => sectionSpec;

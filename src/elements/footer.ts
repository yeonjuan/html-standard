import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const footerSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const footer: GetElementSpec = () => footerSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const spanSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const span: GetElementSpec = () => spanSpec;

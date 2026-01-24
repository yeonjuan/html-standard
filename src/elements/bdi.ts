import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const bdiSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const bdi: GetElementSpec = () => bdiSpec;

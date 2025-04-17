import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const hrSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true),
};

export const hr: GetElementSpec = () => hrSpec;

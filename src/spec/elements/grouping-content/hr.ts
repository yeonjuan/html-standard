import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const hrSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true),
};

export const hr: GetElementSpec = () => hrSpec;

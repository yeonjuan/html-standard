import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const baseSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, ["href", "target"]),
};

export const base: GetElementSpec = () => baseSpec;

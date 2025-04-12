import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const wbrSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true),
};

export const wbr: GetElementSpec = () => wbrSpec;

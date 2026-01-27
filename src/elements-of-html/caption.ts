import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const captionSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const caption: GetElementSpec = () => captionSpec;

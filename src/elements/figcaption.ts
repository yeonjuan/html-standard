import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const figcaptionSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const figcaption: GetElementSpec = () => figcaptionSpec;

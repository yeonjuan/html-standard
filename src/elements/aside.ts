import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const asideSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const aside: GetElementSpec = () => asideSpec;

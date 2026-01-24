import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const rubySpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const ruby: GetElementSpec = () => rubySpec;

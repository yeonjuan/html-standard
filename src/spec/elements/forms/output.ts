import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const output: ElementSpec = {
  attributes: {
    global: true,
    specific: ["for", "form", "name"],
  },
};

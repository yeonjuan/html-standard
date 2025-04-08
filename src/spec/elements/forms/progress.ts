import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const progress: ElementSpec = {
  attributes: {
    global: true,
    specific: ["value", "max"],
  },
};

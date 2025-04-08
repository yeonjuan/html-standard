import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const optgroup: ElementSpec = {
  attributes: {
    global: true,
    specific: ["disabled", "label"],
  },
};

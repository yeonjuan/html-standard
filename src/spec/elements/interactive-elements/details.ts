import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const details: ElementSpec = {
  attributes: {
    global: true,
    specific: ["name", "open"],
  },
};

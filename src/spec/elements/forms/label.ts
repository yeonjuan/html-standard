import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const label: ElementSpec = {
  attributes: {
    global: true,
    specific: ["for"],
  },
};

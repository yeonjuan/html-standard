import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const td: ElementSpec = {
  attributes: {
    global: true,
    specific: ["colspan", "rowspan", "headers"],
  },
};

import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const th: ElementSpec = {
  attributes: {
    global: true,
    specific: ["colspan", "rowspan", "headers", "scope", "abbr"],
  },
};

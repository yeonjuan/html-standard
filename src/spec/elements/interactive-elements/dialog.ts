import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const dialog: ElementSpec = {
  attributes: {
    global: true,
    specific: ["closedby", "open"],
  },
};

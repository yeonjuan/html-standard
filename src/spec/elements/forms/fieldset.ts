import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const fieldset: ElementSpec = {
  attributes: {
    global: true,
    specific: ["disabled", "form", "name"],
  },
};

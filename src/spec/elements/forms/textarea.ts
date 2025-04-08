import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const textarea: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "autocomplete",
      "cols",
      "dirname",
      "disabled",
      "form",
      "maxlength",
      "minlength",
      "name",
      "placeholder",
      "readonly",
      "required",
      "rows",
      "wrap",
    ],
  },
};

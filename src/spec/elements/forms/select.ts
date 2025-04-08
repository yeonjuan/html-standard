import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const select: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "autocomplete",
      "disabled",
      "form",
      "multiple",
      "name",
      "required",
      "size",
    ],
  },
};

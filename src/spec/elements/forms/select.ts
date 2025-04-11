import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const select: ElementSpec = {
  contents: {
    model: [], // TODO
  },
  attributes: {
    global,
    specific: new Set([
      "autocomplete",
      "disabled",
      "form",
      "multiple",
      "name",
      "required",
      "size",
    ]),
  },
};

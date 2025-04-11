import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const textarea: ElementSpec = {
  contents: {
    model: [
      {
        rule: "zeroOrMore",
        contents: contents.text,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set([
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
    ]),
  },
};

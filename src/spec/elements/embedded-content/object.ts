import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const object: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.transparentContent,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["data", "type", "name", "form", "width", "height"]),
  },
};

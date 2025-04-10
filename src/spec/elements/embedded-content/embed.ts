import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const embed: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set(["src", "type", "width", "height"]),
  },
};

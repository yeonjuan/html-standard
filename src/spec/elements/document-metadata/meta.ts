import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const meta: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global,
    specific: new Set(["name", "http-equiv", "content", "charset", "media"]),
  },
};

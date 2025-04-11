import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const option: ElementSpec = {
  contents: {
    model: [], // TODO
  },
  attributes: {
    global,
    specific: new Set(["disabled", "label", "selected", "value"]),
  },
};

import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const option: ElementSpec = {
  attributes: {
    global: true,
    specific: ["disabled", "label", "selected", "value"],
  },
};

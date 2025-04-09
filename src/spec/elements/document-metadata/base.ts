import { ElementSpec } from "../types";

export const base: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global: true,
    specific: ["href", "target"],
  },
};

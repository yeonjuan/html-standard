import { ElementSpec } from "../types";

export const base: ElementSpec = {
  attributes: {
    global: true,
    specific: ["href", "target"],
  },
};

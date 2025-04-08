import { ElementSpec } from "../types";

export const slot: ElementSpec = {
  attributes: {
    global: true,
    specific: ["name"],
  },
};

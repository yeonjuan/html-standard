import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const meter: ElementSpec = {
  attributes: {
    global: true,
    specific: ["value", "min", "max", "low", "high", "optimum"],
  },
};

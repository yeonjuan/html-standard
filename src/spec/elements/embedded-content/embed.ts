import { ElementSpec } from "../types";

export const embed: ElementSpec = {
  attributes: {
    global: true,
    specific: ["src", "type", "width", "height"],
  },
};

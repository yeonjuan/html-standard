import { ElementSpec } from "../types";

export const object: ElementSpec = {
  attributes: {
    global: true,
    specific: ["data", "type", "name", "form", "width", "height"],
  },
};

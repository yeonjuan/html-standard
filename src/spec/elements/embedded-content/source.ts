import { ElementSpec } from "../types";

export const source: ElementSpec = {
  attributes: {
    global: true,
    specific: ["type", "media", "src", "srcset", "sizes", "width", "height"],
  },
};

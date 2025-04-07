import { ElementSpec } from "../types";

export const meta: ElementSpec = {
  attributes: {
    global: true,
    specific: ["name", "http-equiv", "content", "charset", "media"],
  },
};

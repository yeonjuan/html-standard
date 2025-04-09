import { ElementSpec } from "../types";

export const meta: ElementSpec = {
  contents: {
    model: null,
  },
  attributes: {
    global: true,
    specific: ["name", "http-equiv", "content", "charset", "media"],
  },
};

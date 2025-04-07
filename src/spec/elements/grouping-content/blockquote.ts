import { ElementSpec } from "../types";

export const blockquote: ElementSpec = {
  attributes: {
    global: true,
    specific: ["cite"],
  },
};

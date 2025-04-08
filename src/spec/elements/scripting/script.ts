import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const script: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "src",
      "type",
      "nomodule",
      "async",
      "defer",
      "crossorigin",
      "integrity",
      "referrerpolicy",
      "blocking",
      "fetchpriority",
    ],
  },
};

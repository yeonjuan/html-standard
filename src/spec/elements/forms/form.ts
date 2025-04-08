import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const form: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "accept-charset",
      "action",
      "autocomplete",
      "enctype",
      "method",
      "name",
      "novalidate",
      "target",
      "rel",
    ],
  },
};

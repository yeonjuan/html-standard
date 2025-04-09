import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const tbody: ElementSpec = {
  contents: {
    allowed: ["caption", "colgroup", "thead", "tbody", "tr", "tfoot"],
    rules: {
      caption: {
        required: false,
        followedBy: "colgroup",
        max: 1,
      },
      colgroup: {
        required: false,
        followedBy: "thead",
      },
      thead: {
        required: false,
        max: 1,
      },
      tbody: {
        required: false,
        followedBy: "tfoot",
      },
      tfoot: {
        required: false,
      },
    },
  },
  attributes: attributes.globalOnly,
};

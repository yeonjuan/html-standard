import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const title: ElementSpec = {
  contents: {
    model: [
      {
        rule: "required",
        name: ["#text"],
      },
    ],
  },
  attributes: attributes.globalOnly,
};

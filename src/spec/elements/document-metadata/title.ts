import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const title: ElementSpec = {
  contents: {
    model: [
      {
        rule: "required",
        contents: new Set(["#text"]),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

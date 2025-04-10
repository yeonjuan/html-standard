import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const style: ElementSpec = {
  contents: {
    model: [
      {
        rule: "required",
        contents: new Set(["#text"]),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["media", "blocking", "title"]),
  },
};

import { ElementSpec } from "../types";

export const style: ElementSpec = {
  contents: {
    model: [
      {
        rule: "required",
        name: ["#text"],
      },
    ],
  },
  attributes: {
    global: true,
    specific: ["media", "blocking", "title"],
  },
};

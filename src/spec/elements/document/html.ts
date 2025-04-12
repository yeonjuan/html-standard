import { contentAttributes } from "../utils/contentAttributes";
import { ElementSpec, GetElementSpec } from "../types";

const htmlSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: new Set(["head"]),
    },
    {
      type: "required",
      contents: new Set(["body"]),
    },
  ],
  attributes: contentAttributes(true),
};

export const html: GetElementSpec = () => htmlSpec;

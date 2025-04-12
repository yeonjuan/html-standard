import { attributes } from "../common/attributes";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const titleSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: new Set(["#text"]),
    },
  ],
  attributes: contentAttributes(true),
};

export const title: GetElementSpec = () => titleSpec;

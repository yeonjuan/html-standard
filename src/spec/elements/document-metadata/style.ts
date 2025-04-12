import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const styleSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: new Set(["#text"]),
    },
  ],
  attributes: contentAttributes(true, ["media", "blocking", "title"]),
};

export const style: GetElementSpec = () => styleSpec;

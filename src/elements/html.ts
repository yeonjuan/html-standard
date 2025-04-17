import type { ElementSpec, GetElementSpec } from "../types";

import { contentAttributes } from "../helpers";
import { contents } from "../helpers";

const htmlSpec: ElementSpec = {
  contents: [
    {
      type: "required",
      contents: contents.fromKeys("head"),
    },
    {
      type: "required",
      contents: contents.fromKeys("body"),
    },
  ],
  attributes: contentAttributes(true),
};

export const html: GetElementSpec = () => htmlSpec;

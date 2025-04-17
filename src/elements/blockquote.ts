import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const blockquoteSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["cite"]),
};

export const blockquote: GetElementSpec = () => blockquoteSpec;

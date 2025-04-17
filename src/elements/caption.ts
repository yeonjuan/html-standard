import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const captionSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
      constraints: {
        descendants: contentConstraint.fromEntries([["table", disallow]]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const caption: GetElementSpec = () => captionSpec;

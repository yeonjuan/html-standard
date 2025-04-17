import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const progressSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
      constraints: {
        descendants: contentConstraint.fromEntries([["progress", disallow]]),
      },
    },
  ],
  attributes: contentAttributes(true, ["value", "max"]),
};

export const progress: GetElementSpec = () => progressSpec;

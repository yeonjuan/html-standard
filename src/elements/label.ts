import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const labelSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
      constraints: {
        descendants: contentConstraint.fromEntries([["label", disallow]]),
      },
    },
  ],
  attributes: contentAttributes(true, ["for"]),
};

export const label: GetElementSpec = () => labelSpec;

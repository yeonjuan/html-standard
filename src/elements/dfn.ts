import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const dfnSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
      constraints: {
        descendants: contentConstraint.fromEntries([["dfn", disallow]]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const dfn: GetElementSpec = () => dfnSpec;

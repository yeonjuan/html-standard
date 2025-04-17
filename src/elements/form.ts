import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const formSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
      constraints: {
        descendants: contentConstraint.fromEntries([["from", disallow]]),
      },
    },
  ],
  attributes: contentAttributes(true, [
    "accept-charset",
    "action",
    "autocomplete",
    "enctype",
    "method",
    "name",
    "novalidate",
    "target",
    "rel",
  ]),
};

export const form: GetElementSpec = () => formSpec;

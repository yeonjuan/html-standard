import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentsPreset,
  contentConstraint,
  disallow,
} from "../helpers";

const meterSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
      constraints: {
        descendants: contentConstraint.fromEntries([["meter", disallow]]),
      },
    },
  ],
  attributes: contentAttributes(true, [
    "value",
    "min",
    "max",
    "low",
    "high",
    "optimum",
  ]),
};

export const meter: GetElementSpec = () => meterSpec;

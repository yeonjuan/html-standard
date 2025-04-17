import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const headerSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          new Set(["header", "footer"]),
        ),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const header: GetElementSpec = () => headerSpec;

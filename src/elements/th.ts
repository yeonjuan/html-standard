import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const thSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          new Set(["header", "footer"]),
          contentsPreset.sectioningContent,
          contentsPreset.headingContent,
        ),
      },
    },
  ],
  attributes: contentAttributes(true, [
    "colspan",
    "rowspan",
    "headers",
    "scope",
    "abbr",
  ]),
};

export const th: GetElementSpec = () => thSpec;

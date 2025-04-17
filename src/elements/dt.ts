import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const dtSpec: ElementSpec = {
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
  attributes: contentAttributes(true),
};

export const dt: GetElementSpec = () => dtSpec;

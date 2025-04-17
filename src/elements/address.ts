import { contentConstraint, disallow } from "../helpers";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const addressSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          contentsPreset.headingContent,
          contentsPreset.sectioningContent,
          new Set(["header", "footer", "address"]),
        ),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const address: GetElementSpec = () => addressSpec;

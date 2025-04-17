import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";
import { contentConstraint, onlyOne, required } from "../helpers";

const headSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.metadataContent,
      constraints: {
        children: contentConstraint.fromEntries([
          ["title", required],
          ["base", onlyOne],
        ]),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const head: GetElementSpec = () => headSpec;

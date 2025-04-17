import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentsPreset,
  contentConstraint,
  disallow,
} from "../helpers";

const footerSpec: ElementSpec = {
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

export const footer: GetElementSpec = () => footerSpec;

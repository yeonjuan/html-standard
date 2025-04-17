import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const canvasSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          contentsPreset.interactiveContent,
        ),
      },
    },
  ],
  attributes: contentAttributes(true, ["width", "height"]),
};

export const canvas: GetElementSpec = () => canvasSpec;

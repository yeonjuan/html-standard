import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const canvasSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
      constraints: {
        descendants: setsToMap({ disallow: true }, contents.interactiveContent),
      },
    },
  ],
  attributes: contentAttributes(true, ["width", "height"]),
};

export const canvas: GetElementSpec = () => canvasSpec;

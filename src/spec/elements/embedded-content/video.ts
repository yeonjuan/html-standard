import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const attributes = contentAttributes(true, [
  "src",
  "crossorigin",
  "poster",
  "preload",
  "autoplay",
  "playsinline",
  "loop",
  "muted",
  "controls",
  "width",
  "height",
]);

const videoWithSrcSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: new Set("track"),
    },
    {
      type: "zeroOrMore",
      contents: contents.transparentContent,
      constraints: {
        descendants: setsToMap({ disallow: true }, contents.mediaElements),
      },
    },
  ],
  attributes,
};
const videoWitoutSrcSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: new Set("source"),
    },
    {
      type: "zeroOrMore",
      contents: new Set("track"),
    },
    {
      type: "zeroOrMore",
      contents: contents.transparentContent,
      constraints: {
        descendants: setsToMap({ disallow: true }, contents.mediaElements),
      },
    },
  ],
  attributes,
};

export const video: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (!!attributes["src"]) {
    return videoWithSrcSpec;
  }
  return videoWitoutSrcSpec;
};

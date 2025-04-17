import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentsPreset,
  contentConstraint,
  disallow,
  contents,
} from "../helpers";

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
      contents: contents.fromKeys("track"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.transparentContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          contentsPreset.mediaElements,
        ),
      },
    },
  ],
  attributes,
};
const videoWitoutSrcSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("source"),
    },
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("track"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.transparentContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          contentsPreset.mediaElements,
        ),
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

import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contents,
  contentsPreset,
  disallow,
} from "../helpers";

const attributes = contentAttributes(true, [
  "src",
  "crossorigin",
  "preload",
  "autoplay",
  "loop",
  "muted",
  "controls",
]);

const audioWithSrcSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("track"),
    },
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
    },
  ],
  attributes,
};

const audioWithoutSrcSpec: ElementSpec = {
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
      type: "oneOrMore",
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

export const audio: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (!!attributes["src"]) {
    return audioWithSrcSpec;
  }
  return audioWithoutSrcSpec;
};

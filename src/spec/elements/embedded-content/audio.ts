import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

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
      contents: new Set(["track"]),
    },
    {
      type: "oneOrMore",
      contents: contents.transparentContent,
    },
  ],
  attributes,
};

const audioWithoutSrcSpec: ElementSpec = {
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
      type: "oneOrMore",
      contents: contents.transparentContent,
      constraints: {
        descendants: setsToMap({ disallow: true }, contents.mediaElements),
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

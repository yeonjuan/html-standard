import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

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
  attributes,
};
const videoWitoutSrcSpec: ElementSpec = {
  attributes,
};

export const video: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (!!attributes["src"]) {
    return videoWithSrcSpec;
  }
  return videoWitoutSrcSpec;
};

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

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
  attributes,
};

const audioWithoutSrcSpec: ElementSpec = {
  attributes,
};

export const audio: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (!!attributes["src"]) {
    return audioWithSrcSpec;
  }
  return audioWithoutSrcSpec;
};

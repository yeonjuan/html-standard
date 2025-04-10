import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const video: ElementSpec = {
  attributes: {
    global,
    specific: new Set([
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
    ]),
  },
};

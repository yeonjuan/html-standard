import { ElementSpec } from "../types";

export const video: ElementSpec = {
  attributes: {
    global: true,
    specific: [
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
    ],
  },
};

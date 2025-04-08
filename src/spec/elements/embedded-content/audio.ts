import { ElementSpec } from "../types";

export const audio: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "src",
      "crossorigin",
      "preload",
      "autoplay",
      "loop",
      "muted",
      "controls",
    ],
  },
};

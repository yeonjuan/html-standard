import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const audio: ElementSpec = {
  contents: {
    model: null, //TODO
  },
  attributes: {
    global,
    specific: new Set([
      "src",
      "crossorigin",
      "preload",
      "autoplay",
      "loop",
      "muted",
      "controls",
    ]),
  },
};

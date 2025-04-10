import { setsToMap } from "../../utils/set";
import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const a: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.transparentContent,
        descendantsConstraints: setsToMap(
          {
            disallow: true,
          },
          contents.interactiveContent,
          new Set(["a"]),
        ),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set([
      "href",
      "target",
      "download",
      "ping",
      "rel",
      "hreflang",
      "type",
      "referrerpolicy",
    ]),
  },
};

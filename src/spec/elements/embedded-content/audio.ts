import { setsToMap } from "../../utils/set";
import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const audio: ElementSpec = {
  contents: {
    // sequence?
    model: [
      {
        rule: "conditional",
        conditions: [
          {
            ifAttributes(attributes) {
              return !!attributes["src"];
            },
            model: [
              {
                rule: "zeroOrMore",
                contents: new Set(["track"]),
              },
              {
                rule: "oneOrMore",
                contents: contents.transparentContent,
              },
            ],
          },
          {
            ifAttributes(attributes) {
              return !attributes["src"];
            },
            model: [
              {
                rule: "zeroOrMore",
                contents: new Set("source"),
              },
              {
                rule: "zeroOrMore",
                contents: new Set("track"),
              },
              {
                rule: "oneOrMore",
                contents: contents.transparentContent,
                descendantsConstraints: setsToMap(
                  { disallow: true },
                  contents.mediaElements,
                ),
              },
            ],
          },
        ],
      },
    ],
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

import { ContentConstraintValue, ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const descendantsConstraints = new Map<string, ContentConstraintValue>(
  [contentsPreset.interactiveContent, new Set(["a"])]
    .reduce<string[]>((acc, set) => [...acc, ...set], [])
    .map((key) => [key, disallow]),
);

descendantsConstraints.set("*", {
  disallow: true,
  ifAttributes(attributes) {
    return !!attributes["tabindex"];
  },
});

const aSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.transparentContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          contentsPreset.interactiveContent,
          new Set(["a"]),
        ),
      },
    },
  ],
  attributes: contentAttributes(true, [
    "href",
    "target",
    "download",
    "ping",
    "rel",
    "hreflang",
    "type",
    "referrerpolicy",
  ]),
};

export const a: GetElementSpec = () => aSpec;

import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ContentConstraintValue, ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const descendantsConstraints = setsToMap<ContentConstraintValue>(
  {
    disallow: true,
  },
  contents.interactiveContent,
  new Set(["a"]),
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
      contents: contents.transparentContent,
      constraints: {
        descendants: setsToMap(
          {
            disallow: true,
          },
          contents.interactiveContent,
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

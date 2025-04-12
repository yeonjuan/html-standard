import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const thSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
      constraints: {
        descendants: setsToMap(
          {
            disallow: true,
          },
          new Set(["header", "footer"]),
          contents.sectioningContent,
          contents.headingContent,
        ),
      },
    },
  ],
  attributes: contentAttributes(true, [
    "colspan",
    "rowspan",
    "headers",
    "scope",
    "abbr",
  ]),
};

export const th: GetElementSpec = () => thSpec;

import { setsToMap } from "../../utils/set";
import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const th: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
        descendantsConstraints: setsToMap(
          {
            disallow: true,
          },
          new Set(["header", "footer"]),
          contents.sectioningContent,
          contents.headingContent,
        ),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["colspan", "rowspan", "headers", "scope", "abbr"]),
  },
};

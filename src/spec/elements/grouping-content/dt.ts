import { setsToMap } from "../../utils/set";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const dt: ElementSpec = {
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
  attributes: attributes.globalOnly,
};

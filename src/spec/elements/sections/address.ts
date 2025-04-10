import { setsToMap } from "../../utils/set";
import { attributes } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const address: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
        descendantsConstraints: setsToMap(
          {
            disallow: true,
          },
          contents.headingContent,
          contents.sectioningContent,
          new Set(["header", "footer", "address"]),
        ),
      },
    ],
  },
  attributes: attributes.globalOnly,
};

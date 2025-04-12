import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const addressSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
      constraints: {
        descendants: setsToMap(
          {
            disallow: true,
          },
          contents.headingContent,
          contents.sectioningContent,
          new Set(["header", "footer", "address"]),
        ),
      },
    },
  ],
  attributes: contentAttributes(true),
};

export const address: GetElementSpec = () => addressSpec;

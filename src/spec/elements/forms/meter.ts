import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const meterSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
      constraints: {
        descendants: new Map([
          [
            "meter",
            {
              disallow: true,
            },
          ],
        ]),
      },
    },
  ],
  attributes: contentAttributes(true, [
    "value",
    "min",
    "max",
    "low",
    "high",
    "optimum",
  ]),
};

export const meter: GetElementSpec = () => meterSpec;

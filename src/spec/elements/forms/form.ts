import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const formSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.flowContent,
      constraints: {
        descendants: new Map([
          [
            "form",
            {
              disallow: true,
            },
          ],
        ]),
      },
    },
  ],

  attributes: contentAttributes(true, [
    "accept-charset",
    "action",
    "autocomplete",
    "enctype",
    "method",
    "name",
    "novalidate",
    "target",
    "rel",
  ]),
};

export const form: GetElementSpec = () => formSpec;

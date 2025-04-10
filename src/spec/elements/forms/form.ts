import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const form: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
        descendantsConstraints: new Map([
          [
            "form",
            {
              disallow: true,
            },
          ],
        ]),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set([
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
  },
};

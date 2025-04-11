import { setsToMap } from "../../utils/set";
import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const button: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
        descendantsConstraints: setsToMap(
          {
            disallow: true,
          },
          contents.interactiveContent,
        ),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set([
      "command",
      "commandfor",
      "disabled",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "name",
      "popovertarget",
      "popovertargetaction",
      "type",
      "value",
    ]),
  },
};

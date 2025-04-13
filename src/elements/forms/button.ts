import { setsToMap } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const buttonSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
      constraints: {
        descendants: setsToMap(
          {
            disallow: true,
          },
          contents.interactiveContent,
        ),
      },
    },
  ],
  attributes: contentAttributes(true, [
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
};

export const button: GetElementSpec = () => buttonSpec;

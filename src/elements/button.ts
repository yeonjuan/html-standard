import { ElementSpec, GetElementSpec } from "../types";
import {
  contentAttributes,
  contentConstraint,
  contentsPreset,
  disallow,
} from "../helpers";

const buttonSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
      constraints: {
        descendants: contentConstraint.fromSets(
          disallow,
          contentsPreset.interactiveContent,
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

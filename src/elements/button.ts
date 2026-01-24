import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const buttonSpec: ElementSpec = {
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

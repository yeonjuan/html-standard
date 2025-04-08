import { ElementSpec } from "../types";

export const button: ElementSpec = {
  attributes: {
    global: true,
    specific: [
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
    ],
  },
};

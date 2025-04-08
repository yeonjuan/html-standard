import { ElementSpec } from "../types";

export const template: ElementSpec = {
  attributes: {
    global: true,
    specific: [
      "shadowrootmode",
      "shadowrootdelegatesfocus",
      "shadowrootclonable",
      "shadowrootserializable",
    ],
  },
};

import { global } from "../common/attributes";
import { ElementSpec } from "../types";

export const template: ElementSpec = {
  contents: {
    model: null, // TODO
  },
  attributes: {
    global,
    specific: new Set([
      "shadowrootmode",
      "shadowrootdelegatesfocus",
      "shadowrootclonable",
      "shadowrootserializable",
    ]),
  },
};

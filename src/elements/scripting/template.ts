import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const templateSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "shadowrootmode",
    "shadowrootdelegatesfocus",
    "shadowrootclonable",
    "shadowrootserializable",
  ]),
};

export const template: GetElementSpec = () => templateSpec;

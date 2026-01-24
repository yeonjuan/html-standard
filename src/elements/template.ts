import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const templateSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "shadowrootmode",
    "shadowrootdelegatesfocus",
    "shadowrootclonable",
    "shadowrootserializable",
  ]),
};

export const template: GetElementSpec = () => templateSpec;

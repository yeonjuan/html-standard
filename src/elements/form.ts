import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const formSpec: ElementSpec = {
  attributes: contentAttributes(true, [
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
};

export const form: GetElementSpec = () => formSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const trackSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, [
    "kind",
    "src",
    "srclang",
    "label",
    "label",
    "default",
  ]),
};

export const track: GetElementSpec = () => trackSpec;

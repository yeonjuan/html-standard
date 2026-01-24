import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const scriptSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "src",
    "type",
    "nomodule",
    "async",
    "defer",
    "crossorigin",
    "integrity",
    "referrerpolicy",
    "blocking",
    "fetchpriority",
  ]),
};

export const script: GetElementSpec = () => scriptSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const bodySpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "onafterprint",
    "onbeforeprint",
    "onbeforeunload",
    "onhashchange",
    "onlanguagechange",
    "onmessage",
    "onmessageerror",
    "onoffline",
    "ononline",
    "onpageswap",
    "onpagehide",
    "onpagereveal",
    "onpageshow",
    "onpopstate",
    "onrejectionhandled",
    "onstorage",
    "onunhandledrejection",
    "onunload",
  ]),
};

export const body: GetElementSpec = () => bodySpec;

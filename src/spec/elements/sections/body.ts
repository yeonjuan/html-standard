import { attributes } from "../common/attributes";
import { ElementSpec } from "../types";

export const body: ElementSpec = {
  attributes: {
    global: true,
    specific: [
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
    ],
  },
};

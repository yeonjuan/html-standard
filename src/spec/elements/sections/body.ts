import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const body: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.flowContent,
      },
    ],
  },
  attributes: {
    global,
    specific: new Set([
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
  },
};

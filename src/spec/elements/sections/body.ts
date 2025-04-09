import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const body: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        name: contents.flowContent,
      },
    ],
  },
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

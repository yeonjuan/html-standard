import { global } from "../common/attributes";
import { contents } from "../common/contents";
import { ElementSpec } from "../types";

export const label: ElementSpec = {
  contents: {
    model: [
      {
        rule: "oneOrMore",
        contents: contents.phrasingContent,
        // TODO: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
        descendantsConstraints: new Map([["label", { disallow: true }]]),
      },
    ],
  },
  attributes: {
    global,
    specific: new Set(["for"]),
  },
};

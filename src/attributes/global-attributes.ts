import {
  AttributeSpecDefinition,
  SpaceSeperatedTokens,
} from "../common/microsyntaxes";
import { BooleanAttributes } from "../common/microsyntaxes/boolean-attributes";
import { EnumeratedAttributes } from "../common/microsyntaxes/enumerated-attributes";
import { SignedIntegers } from "../common/microsyntaxes/signed-integers";

/**
 * https://html.spec.whatwg.org/multipage/dom.html#global-attributes
 */
export const globalAttributes: Record<string, AttributeSpecDefinition> = {
  accesskey: {
    type: SpaceSeperatedTokens.type,
    options: {
      unique: true,
    },
  },
  autocapitalize: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["off", "none", "on", "sentences", "words", "characters"],
    },
  },
  autocorrect: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["on", "off"],
    },
  },
  autofocus: {
    type: BooleanAttributes.type,
  },
  contenteditable: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["true", "false", "plaintext-only"],
    },
  },
  dir: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["ltr", "rtl", "auto"],
    },
  },
  draggable: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["true", "false"],
    },
  },
  enterkeyhint: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["enter", "done", "go", "next", "previous", "search", "send"],
    },
  },
  // TODO: headingoffset - non-standard attribute, need to verify type
  // headingoffset: {},
  // TODO: headingreset - non-standard attribute, need to verify type
  // headingreset: {},
  hidden: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["", "hidden", "until-found"],
    },
  },
  inert: {
    type: BooleanAttributes.type,
  },
  inputmode: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: [
        "none",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
        "search",
      ],
    },
  },
  // TODO: is - custom element name, need specific validator
  // is: {},
  // TODO: itemid - URL type, need specific validator
  // itemid: {},
  // TODO: itemprop - space-separated tokens
  // itemprop: {},
  // TODO: itemref - space-separated tokens (IDREFs)
  // itemref: {},
  itemscope: {
    type: BooleanAttributes.type,
  },
  // TODO: itemtype - space-separated valid URLs
  // itemtype: {},
  // TODO: lang - BCP 47 language tag, need specific validator
  // lang: {},
  // TODO: nonce - text value, need specific validator
  // nonce: {},
  popover: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["", "auto", "manual"],
    },
  },
  spellcheck: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["true", "false"],
    },
  },
  // TODO: style - CSS declarations, need specific validator
  // style: {},
  tabindex: {
    type: SignedIntegers.type,
  },
  // TODO: title - text value, need specific validator
  // title: {},
  translate: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["yes", "no"],
    },
  },
  writingsuggestions: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["true", "false"],
    },
  },
};

import { AnyAttribute } from "./any-attribute";
import { BooleanAttribute } from "./boolean-attribute";
import { EnumeratedAttribute } from "./enumerated-attribute";
import { SignedInteger } from "./signed-integer";
import { SpaceSeperatedTokens } from "./space-seperated-tokens";
import { Text } from "./text";
import { ValidURL } from "./valid-url";
import { BCP47 } from "./bcp-47";

/**
 * Global attributes that can be used on any HTML element.
 *
 * @see https://html.spec.whatwg.org/multipage/dom.html#global-attributes
 */
export const globalAttributes = new Map<string, AnyAttribute>([
  // accesskey: space-separated list of single characters
  [
    "accesskey",
    {
      type: SpaceSeperatedTokens.type,
      options: { unique: false },
    },
  ],

  // autocapitalize: controls automatic capitalization
  [
    "autocapitalize",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["off", "none", "on", "sentences", "words", "characters"],
      },
    },
  ],

  // autocorrect: controls automatic correction
  [
    "autocorrect",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["on", "off"],
      },
    },
  ],

  // autofocus: boolean attribute
  [
    "autofocus",
    {
      type: BooleanAttribute.type,
    },
  ],

  // contenteditable: controls whether element is editable
  [
    "contenteditable",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false", "plaintext-only"],
      },
    },
  ],

  // dir: text directionality
  [
    "dir",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["ltr", "rtl", "auto"],
      },
    },
  ],

  // draggable: controls whether element is draggable
  [
    "draggable",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],

  // enterkeyhint: hint for enter key label on virtual keyboards
  [
    "enterkeyhint",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: [
          "enter",
          "done",
          "go",
          "next",
          "previous",
          "search",
          "send",
        ],
      },
    },
  ],

  // headingoffset
  // TODO: implementation needed
  [
    "headingoffset",
    {
      type: Text.type,
    },
  ],

  // headingreset
  // TODO: implementation needed
  [
    "headingreset",
    {
      type: Text.type,
    },
  ],

  // hidden: controls visibility
  [
    "hidden",
    {
      type: "#or",
      items: [
        {
          type: BooleanAttribute.type,
        },
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["until-found"],
          },
        },
      ],
    },
  ],

  // inert: boolean attribute
  [
    "inert",
    {
      type: BooleanAttribute.type,
    },
  ],

  // inputmode: hint for input modality
  [
    "inputmode",
    {
      type: EnumeratedAttribute.type,
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
  ],

  // is: custom element type
  [
    "is",
    {
      type: Text.type,
    },
  ],

  // itemid: global identifier for microdata item
  [
    "itemid",
    {
      type: ValidURL.type,
    },
  ],

  // itemprop: microdata property names
  [
    "itemprop",
    {
      type: SpaceSeperatedTokens.type,
      options: { unique: false },
    },
  ],

  // itemref: references to other elements for microdata
  [
    "itemref",
    {
      type: SpaceSeperatedTokens.type,
      options: { unique: true },
    },
  ],

  // itemscope: boolean attribute for microdata scope
  [
    "itemscope",
    {
      type: BooleanAttribute.type,
    },
  ],

  // itemtype: microdata item types
  [
    "itemtype",
    {
      type: SpaceSeperatedTokens.type,
      options: { unique: true },
    },
  ],

  // lang: language of element's content
  [
    "lang",
    {
      type: BCP47.type,
    },
  ],

  // nonce: cryptographic nonce for CSP
  [
    "nonce",
    {
      type: Text.type,
    },
  ],

  // popover: popover state
  [
    "popover",
    {
      type: "#or",
      items: [
        {
          type: BooleanAttribute.type,
        },
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["auto", "manual"],
          },
        },
      ],
    },
  ],

  // spellcheck: controls spellchecking
  [
    "spellcheck",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],

  // style: inline CSS styles
  [
    "style",
    {
      type: Text.type,
    },
  ],

  // tabindex: tab navigation order
  [
    "tabindex",
    {
      type: SignedInteger.type,
    },
  ],

  // title: advisory information
  [
    "title",
    {
      type: Text.type,
    },
  ],

  // translate: controls translation
  [
    "translate",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["yes", "no"],
      },
    },
  ],

  // writingsuggestions: controls writing suggestions
  [
    "writingsuggestions",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],
]);

import { AnyAttribute } from "./any-attribute";
import { BooleanAttribute } from "./boolean-attribute";
import { EnumeratedAttribute } from "./enumerated-attribute";
import { SignedInteger } from "./signed-integer";
import { SpaceSeperatedTokens } from "./space-seperated-tokens";
import { Text } from "./text";
import { ValidURL } from "./valid-url";
import { BCP47 } from "./bcp-47";
import { NonNegativeInteger } from "./non-negative-integer";

/**
 * @see https://html.spec.whatwg.org/multipage/dom.html#global-attributes
 */
export const globalAttributes = new Map<string, AnyAttribute>([
  [
    // If specified, the value must be an ordered set of unique space-separated tokens
    // none of which are identical to another token and each of which must be exactly one code point in length.
    "accesskey",
    {
      type: SpaceSeperatedTokens.type,
      options: {
        unique: true,
        validateToken(value) {
          // Each token must be exactly one code point in length
          // Use Array.from to properly handle Unicode code points (e.g., emojis, surrogate pairs)
          const codePoints = Array.from(value);
          return codePoints.length === 1;
        },
      },
    },
  ],
  [
    "autocapitalize",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["off", "none", "on", "sentences", "words", "characters"],
      },
    },
  ],
  [
    "autocorrect",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["on", "off"],
      },
    },
  ],
  [
    "autofocus",
    {
      type: BooleanAttribute.type,
    },
  ],
  [
    "contenteditable",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false", "plaintext-only"],
      },
    },
  ],
  [
    "dir",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["ltr", "rtl", "auto"],
      },
    },
  ],
  [
    "draggable",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],
  [
    "enterkeyhint",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["enter", "done", "go", "next", "previous", "search", "send"],
      },
    },
  ],
  [
    "headingoffset",
    {
      type: NonNegativeInteger.type,
      options: {},
    },
  ],
  [
    "headingreset",
    {
      type: BooleanAttribute.type,
    },
  ],
  [
    "hidden",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["until-found", "hidden"],
      },
    },
  ],
  [
    "inert",
    {
      type: BooleanAttribute.type,
    },
  ],
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
  [
    "is",
    {
      type: Text.type,
    },
  ],
  [
    "itemid",
    {
      type: ValidURL.type,
    },
  ],
  [
    "itemprop",
    {
      type: SpaceSeperatedTokens.type,
      options: { unique: true },
    },
  ],
  [
    "itemref",
    {
      type: SpaceSeperatedTokens.type,
      options: { unique: true },
    },
  ],
  [
    "itemscope",
    {
      type: BooleanAttribute.type,
    },
  ],
  /**
   * The itemtype attribute, if specified, must have a value that is an unordered set of unique space-separated tokens,
   * none of which are identical to another token and each of which is a valid URL string that is an absolute URL,
   * and all of which are defined to use the same vocabulary. The attribute's value must have at least one token.
   */
  [
    "itemtype",
    {
      type: SpaceSeperatedTokens.type,
      options: {
        unique: true,
        validateToken(value) {
          // Each token must be a valid absolute URL
          try {
            new URL(value);
            // URL constructor only accepts absolute URLs, so if it succeeds, it's absolute
            return true;
          } catch {
            return false;
          }
        },
      },
    },
  ],
  [
    "lang",
    {
      type: BCP47.type,
    },
  ],
  [
    "nonce",
    {
      type: Text.type,
    },
  ],
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
            keywords: ["auto", "manual", "hint"],
          },
        },
      ],
    },
  ],
  [
    "spellcheck",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],
  [
    "style",
    {
      type: Text.type,
    },
  ],
  [
    "tabindex",
    {
      type: SignedInteger.type,
    },
  ],
  [
    "title",
    {
      type: Text.type,
    },
  ],
  [
    "translate",
    {
      type: EnumeratedAttribute.type,
      options: {
        keywords: ["yes", "no"],
      },
    },
  ],
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

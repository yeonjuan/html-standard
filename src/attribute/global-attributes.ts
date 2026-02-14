import type { AnyAttribute } from "./validators/any-attribute.js";
import { BooleanAttribute } from "./validators/boolean-attribute.js";
import { EnumeratedAttribute } from "./validators/enumerated-attribute.js";
import { SignedInteger } from "./validators/signed-integer.js";
import { SpaceSeparatedTokens } from "./validators/space-separated-tokens.js";
import { Text } from "./validators/text.js";
import { ValidURL } from "./validators/valid-url.js";
import { BCP47 } from "./validators/bcp-47.js";
import { NonNegativeInteger } from "./validators/non-negative-integer.js";

/**
 * @see https://html.spec.whatwg.org/multipage/dom.html#global-attributes
 */
export const globalAttributes = new Map<string, AnyAttribute>([
  [
    // If specified, the value must be an ordered set of unique space-separated tokens
    // none of which are identical to another token and each of which must be exactly one code point in length.
    "accesskey",
    {
      type: SpaceSeparatedTokens.type,
      unique: true,
      validateToken(value) {
        // Each token must be exactly one code point in length
        // Use Array.from to properly handle Unicode code points (e.g., emojis, surrogate pairs)
        const codePoints = Array.from(value);
        return codePoints.length === 1;
      },
    },
  ],
  [
    "autocapitalize",
    {
      type: EnumeratedAttribute.type,
      keywords: ["off", "none", "on", "sentences", "words", "characters"],
    },
  ],
  [
    "autocorrect",
    {
      type: EnumeratedAttribute.type,
      keywords: ["on", "off"],
    },
  ],
  ["autofocus", BooleanAttribute.Type],
  [
    "contenteditable",
    {
      type: EnumeratedAttribute.type,
      keywords: ["true", "false", "plaintext-only"],
    },
  ],
  [
    "dir",
    {
      type: EnumeratedAttribute.type,
      keywords: ["ltr", "rtl", "auto"],
    },
  ],
  [
    "draggable",
    {
      type: EnumeratedAttribute.type,
      keywords: ["true", "false"],
    },
  ],
  [
    "enterkeyhint",
    {
      type: EnumeratedAttribute.type,
      keywords: ["enter", "done", "go", "next", "previous", "search", "send"],
    },
  ],
  [
    "headingoffset",
    {
      type: NonNegativeInteger.type,
      min: 0,
      max: 8,
    },
  ],
  ["headingreset", BooleanAttribute.Type],
  [
    "hidden",
    {
      type: EnumeratedAttribute.type,
      keywords: ["", "until-found", "hidden"],
    },
  ],
  ["inert", BooleanAttribute.Type],
  [
    "inputmode",
    {
      type: EnumeratedAttribute.type,
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
  ],
  ["is", Text.Type],
  ["itemid", ValidURL.PotentiallySurroundedBySpaces],
  [
    "itemprop",
    {
      type: SpaceSeparatedTokens.type,
      unique: true,
    },
  ],
  [
    "itemref",
    {
      type: SpaceSeparatedTokens.type,
      unique: true,
    },
  ],
  ["itemscope", BooleanAttribute.Type],
  /**
   * The itemtype attribute, if specified, must have a value that is an unordered set of unique space-separated tokens,
   * none of which are identical to another token and each of which is a valid URL string that is an absolute URL,
   * and all of which are defined to use the same vocabulary. The attribute's value must have at least one token.
   */
  [
    "itemtype",
    {
      type: SpaceSeparatedTokens.type,
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
  ],
  ["lang", BCP47.Type],
  ["nonce", Text.Type],
  [
    "popover",
    {
      type: "#or",
      items: [
        BooleanAttribute.Type,
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "auto", "manual", "hint"],
        },
      ],
    },
  ],
  [
    "spellcheck",
    {
      type: EnumeratedAttribute.type,
      keywords: ["", "true", "false"],
    },
  ],
  ["style", Text.Type],
  ["tabindex", SignedInteger.Type],
  ["title", Text.Type],
  [
    "translate",
    {
      type: EnumeratedAttribute.type,
      keywords: ["", "yes", "no"],
    },
  ],
  [
    "writingsuggestions",
    {
      type: EnumeratedAttribute.type,
      keywords: ["", "true", "false"],
    },
  ],
]);

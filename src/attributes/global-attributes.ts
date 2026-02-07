import {
  AttributeSpecDefinition,
  SpaceSeperatedTokens,
  Text,
} from "../common/microsyntaxes";
import { BooleanAttributes } from "../common/microsyntaxes/boolean-attributes";
import { EnumeratedAttributes } from "../common/microsyntaxes/enumerated-attributes";
import { SignedIntegers } from "../common/microsyntaxes/signed-integers";

export const globalAttributes: [string, AttributeSpecDefinition][] = [
  [
    "accesskey",
    {
      type: SpaceSeperatedTokens.type,
      options: {
        unique: true,
      },
    },
  ],
  [
    "autocapitalize",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["off", "none", "on", "sentences", "words", "characters"],
      },
    },
  ],
  [
    "autocorrect",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["on", "off"],
      },
    },
  ],
  [
    "autofocus",
    {
      type: BooleanAttributes.type,
    },
  ],
  [
    "contenteditable",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["", "true", "false", "plaintext-only"],
      },
    },
  ],
  [
    "dir",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["ltr", "rtl", "auto"],
      },
    },
  ],
  [
    "draggable",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["", "true", "false"],
      },
    },
  ],
  [
    "enterkeyhint",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["enter", "done", "go", "next", "previous", "search", "send"],
      },
    },
  ],
  // TODO: headingoffset - non-standard attribute, need to verify type
  // TODO: headingreset - non-standard attribute, need to verify type
  [
    "hidden",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["", "hidden", "until-found"],
      },
    },
  ],
  [
    "inert",
    {
      type: BooleanAttributes.type,
    },
  ],
  [
    "inputmode",
    {
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
  ],
  // TODO: is - custom element name, need specific validator
  [
    "is",
    {
      type: Text.type,
    },
  ],
  [
    "itemid",
    {
      type: Text.type,
    },
  ],
  [
    "itemprop",
    {
      type: SpaceSeperatedTokens.type,
      options: {
        unique: true,
      },
    },
  ],
  [
    "itemref",
    {
      type: SpaceSeperatedTokens.type,
      options: {
        unique: true,
      },
    },
  ],
  [
    "itemscope",
    {
      type: BooleanAttributes.type,
    },
  ],
  // TODO: valid url
  [
    "itemtype",
    {
      type: SpaceSeperatedTokens.type,
      options: {
        unique: true,
      },
    },
  ],
  // TODO: lang - BCP 47 language tag, need specific validator
  [
    "lang",
    {
      type: Text.type,
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
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["", "auto", "manual"],
      },
    },
  ],
  [
    "spellcheck",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],
  // TODO: style - CSS declarations, need specific validator
  [
    "tabindex",
    {
      type: SignedIntegers.type,
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
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["yes", "no"],
      },
    },
  ],
  [
    "writingsuggestions",
    {
      type: EnumeratedAttributes.type,
      options: {
        keywords: ["true", "false"],
      },
    },
  ],
];

import {
  BooleanAttributes,
  EnumeratedAttributes,
  SetOfSpaceSeparatedTokens,
} from "../common/micro-syntaxes";
import { MicroSyntaxes } from "../common/micro-syntaxes/types";

export const globalAttributes = new Map<string, MicroSyntaxes.Spec>([
  [
    "accesskey",
    SetOfSpaceSeparatedTokens.create({
      unique: true,
      allowedValues: null,
    }),
  ],
  [
    "autocapitalize",
    EnumeratedAttributes.create({
      emptyValueDefault: false,
      keywords: ["off", "none", "on", "sentences", "words", "characters"],
    }),
  ],
  ["autofocus", BooleanAttributes.create({ attribute: "autofocus" })],
  [
    "autocorrect",
    EnumeratedAttributes.create({
      emptyValueDefault: true,
      keywords: ["on", "off"],
    }),
  ],
  [
    "contenteditable",
    EnumeratedAttributes.create({
      emptyValueDefault: true,
      keywords: ["true", "false", "plaintext-only"],
    }),
  ],
  [
    "dir",
    EnumeratedAttributes.create({
      emptyValueDefault: true,
      keywords: ["ltr", "rtl", "auto"],
    }),
  ],
  [
    "draggable",
    EnumeratedAttributes.create({
      emptyValueDefault: false,
      keywords: ["true", "false"],
    }),
  ],
  [
    "enterkeyhint",
    EnumeratedAttributes.create({
      emptyValueDefault: false,
      keywords: ["enter", "go", "next", "previous", "search", "send"],
    }),
  ],
  // headingoffset - Experimental attribute, removed from standard
  // headingreset - Experimental attribute, removed from standard
  [
    "hidden",
    EnumeratedAttributes.create({
      emptyValueDefault: true,
      keywords: ["until-found"],
    }),
  ],
  ["inert", BooleanAttributes.create({ attribute: "inert" })],
  [
    "inputmode",
    EnumeratedAttributes.create({
      emptyValueDefault: false,
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
    }),
  ],
  // is - Custom elements (string value, not yet supported by micro-syntaxes)
  // itemid - Microdata (URL value, not yet supported by micro-syntaxes)
  // itemprop - Microdata (space-separated tokens with complex validation, not yet supported)
  // itemref - Microdata (space-separated IDs, not yet supported by micro-syntaxes)
  ["itemscope", BooleanAttributes.create({ attribute: "itemscope" })],
  // itemtype - Microdata (space-separated URLs, not yet supported by micro-syntaxes)
  // lang - BCP 47 language tag (complex string format, not yet supported by micro-syntaxes)
  // nonce - Cryptographic nonce (arbitrary string, not yet supported by micro-syntaxes)
  [
    "popover",
    EnumeratedAttributes.create({
      emptyValueDefault: true,
      keywords: ["auto", "manual"],
    }),
  ],
  [
    "spellcheck",
    EnumeratedAttributes.create({
      emptyValueDefault: true,
      keywords: ["true", "false"],
    }),
  ],
  // style - CSS declarations (complex syntax, not yet supported by micro-syntaxes)
  // tabindex - Integer value (not yet supported by micro-syntaxes)
  // title - Free text (arbitrary string, not yet supported by micro-syntaxes)
  [
    "translate",
    EnumeratedAttributes.create({
      emptyValueDefault: false,
      keywords: ["yes", "no"],
    }),
  ],
  [
    "writingsuggestions",
    EnumeratedAttributes.create({
      emptyValueDefault: false,
      keywords: ["true", "false"],
    }),
  ],
]);

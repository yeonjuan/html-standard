import { AttributeSpec } from "./types";

export const globalAttributes = new Map<string, AttributeSpec>([
  [
    "accessKey",
    {
      type: "orderedSetOfSpaceSeparatedTokens",
    },
  ],
  [
    "autocapitalize",
    {
      type: "enum",
      values: new Set([
        "off",
        "none",
        "on",
        "sentences",
        "words",
        "characters",
      ]),
    },
  ],
  [
    "autocorrect",
    {
      type: "enum",
      values: new Set(["", "on", "off"]),
      allowEmpty: true,
    },
  ],
  [
    "autofocus",
    {
      type: "boolean",
    },
  ],
  [
    "contenteditable",
    {
      type: "enum",
      values: new Set(["", "true", "false", "plaintext-only"]),
      allowEmpty: true,
    },
  ],
  [
    "dir",
    {
      type: "enum",
      values: new Set(["ltr", "rtl", "auto"]),
    },
  ],
  [
    "draggable",
    {
      type: "enum",
      values: new Set(["true", "false"]),
      allowEmpty: true,
    },
  ],
  [
    "enterkeyhint",
    {
      type: "enum",
      values: new Set([
        "enter",
        "done",
        "go",
        "next",
        "previous",
        "seach",
        "send",
      ]),
    },
  ],
  [
    "hidden",
    {
      type: "enum",
      values: new Set(["", "hidden", "until-found"]),
    },
  ],
  [
    "inert",
    {
      type: "boolean",
    },
  ],
  [
    "inputmode",
    {
      type: "enum",
      values: new Set([
        "none",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
        "search",
      ]),
    },
  ],
  [
    "is",
    {
      type: "customElementName",
    },
  ],
  [
    "itemid",
    {
      type: "validURL",
      allowSurroundSpaces: true,
    },
  ],
  [
    "itemprop",
    {
      type: "unorderedSetOfUniqueSpaceSeparatedTokens",
    },
  ],
  [
    "itemref",
    {
      type: "unorderedSetOfUniqueSpaceSeparatedTokens",
    },
  ],
  [
    "itemscope",
    {
      type: "boolean",
    },
  ],
  [
    "itemtype",
    {
      type: "unorderedSetOfUniqueSpaceSeparatedTokens",
    },
  ],
  [
    "lang",
    {
      type: "language",
    },
  ],
  [
    "nonce",
    {
      type: "string",
    },
  ],
  [
    "popover",
    {
      type: "enum",
      values: new Set(["auto", "", "manual", "hint"]),
    },
  ],
  // spellcheck
  // style
  // tabindex
  // title
  // translate
  // writingsuggestions
]);

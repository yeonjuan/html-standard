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
]);

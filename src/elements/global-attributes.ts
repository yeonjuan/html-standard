import {
  BooleanAttributes,
  EnumeratedAttributes,
  SetOfSpaceSeparatedTokens,
} from "../common/micro-syntaxes";
import { MicroSyntaxes } from "../common/micro-syntaxes/types";

export const globalAttributes = new Map<string, MicroSyntaxes.Spec>([
  [
    "accesskey",
    new SetOfSpaceSeparatedTokens({
      unique: true,
    }),
  ],
  //   [
  //     "autocapitalize",
  //     // new EnumeratedAttributes({
  //     //   states: {},
  //     // }),
  //   ],
  ["autofocus", new BooleanAttributes("autofocus")],
]);

import type { ContentConstraints } from "./content-constraints";
import type { ReadonlySet } from "./readonly-set";

export type ContentModel =
  | {
      type: "required";
      contents: ReadonlySet;
      constraints?: ContentConstraints;
    }
  | {
      type: "optional";
      contents: ReadonlySet;
      constraints?: ContentConstraints;
    }
  | {
      type: "zeroOrMore";
      contents: ReadonlySet;
      constraints?: ContentConstraints;
    }
  | {
      type: "oneOrMore";
      contents: ReadonlySet;
      constraints?: ContentConstraints;
    }
  | {
      type: "either";
      options: ContentModel[][];
    };

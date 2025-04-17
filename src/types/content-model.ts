import type { ContentConstraints } from "./content-constraints";
import type { ReadonlySet } from "./readonly-set";

export type ContentModel =
  | {
      type: "required";
      contents: ReadonlySet<string>;
    }
  | {
      type: "optional";
      contents: ReadonlySet<string>;
    }
  | {
      type: "zeroOrMore";
      contents: ReadonlySet<string>;
      constraints?: ContentConstraints;
    }
  | {
      type: "oneOrMore";
      contents: ReadonlySet<string>;
      constraints?: ContentConstraints;
    }
  | {
      type: "either";
      options: ContentModel[][];
    }
  | {
      type: "conditional";
      conditions: {
        ifAttributes?: (
          attributes: Record<string, boolean | string>,
        ) => boolean;
        ifParent?: (parent: { name: string }) => void;
        model: ContentModel[] | null;
      }[];
    };

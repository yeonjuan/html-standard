export type AttributeSpec =
  | {
      type: "orderedSetOfSpaceSeparatedTokens";
    }
  | {
      type: "enum";
      values: Set<string>;
      allowEmpty?: boolean;
    }
  | {
      type: "boolean";
    }
  | {
      type: "customElementName";
    }
  | {
      type: "validURL";
      allowSurroundSpaces: boolean;
    }
  | {
      type: "unorderedSetOfUniqueSpaceSeparatedTokens";
    }
  | {
      type: "language";
    }
  | {
      type: "string";
    };

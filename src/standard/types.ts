export type AttributeSpecDefinition =
  | {
      type: typeof SpaceSeperatedTokens.type;
      options: SpaceSeperatedTokensOptions;
    }
  | {
      type: typeof EnumeratedAttributes.type;
      options: EnumeratedAttributesOptions;
    }
  | {
      type: typeof BooleanAttributes.type;
    }
  | {
      type: typeof SignedIntegers.type;
    }
  | {
      type: typeof Text.type;
    }
  | {
      type: typeof ValidURL.type;
    };

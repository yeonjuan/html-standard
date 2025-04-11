type ContentConstraint = Map<
  string,
  {
    required?: boolean;
    disallow?: boolean;
    max?: number;
    min?: number;
  }
>;

type ContentModel =
  | {
      rule: "required";
      contents: Set<string>;
      disallow?: {
        child: Set<string>;
      };
    }
  | {
      rule: "optional";
      contents: Set<string>;
    }
  | {
      rule: "zeroOrMore";
      contents: Set<string>;
      disallow?: {
        child: Set<string>;
      };
    }
  | {
      rule: "oneOrMore";
      contents: Set<string>;
      childrenConstraints?: ContentConstraint;
      descendantsConstraints?: ContentConstraint;
    }
  | {
      rule: "either";
      options: ContentModel[][];
    }
  | {
      rule: "conditional";
      conditions: {
        ifAttributes?: (
          attributes: Record<string, boolean | string>,
        ) => boolean;
        model: ContentModel[] | null;
      }[];
    };

export type ElementSpec = {
  contents: {
    model: ContentModel[] | null;
  };
  attributes: {
    global: Set<string>;
    specific: Set<string>;
  };
};

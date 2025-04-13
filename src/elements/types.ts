export type ContentConstraintValue = {
  ifAttributes?(attributes: Record<string, string>): boolean;
  required?: boolean;
  disallow?: boolean;
  max?: number;
  min?: number;
};

type ContentConstraint = Map<string, ContentConstraintValue>;

type Constraints = {
  children?: ContentConstraint;
  descendants?: ContentConstraint;
};

type ContentModel =
  | {
      type: "required";
      contents: Set<string>;
    }
  | {
      type: "optional";
      contents: Set<string>;
    }
  | {
      type: "zeroOrMore";
      contents: Set<string>;
      constraints?: Constraints;
    }
  | {
      type: "oneOrMore";
      contents: Set<string>;
      constraints?: Constraints;
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

type ElementState = {
  parent?: string;
  attributes?: Record<string, string>;
};

export type ElementSpec = {
  contents: ContentModel[] | null;
  attributes: {
    has(name: string): boolean;
    global: Set<string>;
    specific: Set<string>;
  };
};

export type GetElementSpec = (state?: ElementState) => {
  contents: ContentModel[] | null;
  attributes: {
    has(name: string): boolean;
    global: Set<string>;
    specific: Set<string>;
  };
};

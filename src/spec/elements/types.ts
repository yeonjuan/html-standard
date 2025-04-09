type ContentModel =
  | {
      rule: "required";
      name: string[];
    }
  | {
      rule: "optional";
      name: string[];
    }
  | {
      rule: "zeroOrMore";
      name: string[];
    }
  | {
      rule: "oneOrMore";
      name: string[];
    }
  | {
      rule: "choice";
      choice: ContentModel[];
    };

export type ElementSpec = {
  contents: {
    model: ContentModel[] | null;
  };
  attributes: {
    global: boolean;
    specific: string[];
  };
};

import {
  EnumeratedAttributes,
  EnumeratedAttributesOptions,
} from "./enumerated-attributes";
import {
  SpaceSeperatedTokens,
  SpaceSeperatedTokensOptions,
} from "./space-seperated-tokens";

export type AttributeSpecDefinition =
  | {
      type: typeof SpaceSeperatedTokens.type;
      options: SpaceSeperatedTokensOptions;
    }
  | {
      type: typeof EnumeratedAttributes.type;
      options: EnumeratedAttributesOptions;
    };

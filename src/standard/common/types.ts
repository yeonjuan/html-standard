import { ValidURL } from "../../standard/common";
import {
  BooleanAttributes,
  BooleanAttributesOptions,
} from "./boolean-attributes";
import {
  EnumeratedAttributes,
  EnumeratedAttributesOptions,
} from "./enumerated-attributes";
import { SignedIntegers } from "./signed-integers";
import {
  SpaceSeperatedTokens,
  SpaceSeperatedTokensOptions,
} from "./space-seperated-tokens";
import { Text } from "./text";

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

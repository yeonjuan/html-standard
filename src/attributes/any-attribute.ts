import { BooleanAttribute } from "./boolean-attribute";
import {
  EnumeratedAttribute,
  EnumeratedAttributeOptions,
} from "./enumerated-attribute";
import { SignedInteger } from "./signed-integer";
import {
  SpaceSeperatedTokens,
  SpaceSeperatedTokensOptions,
} from "./space-seperated-tokens";
import { Text } from "./text";
import { ValidURL } from "./valid-url";

export type AnyAttribute =
  | {
      type: typeof SpaceSeperatedTokens.type;
      options: SpaceSeperatedTokensOptions;
    }
  | {
      type: typeof EnumeratedAttribute.type;
      options: EnumeratedAttributeOptions;
    }
  | {
      type: typeof BooleanAttribute.type;
    }
  | {
      type: typeof SignedInteger.type;
    }
  | {
      type: typeof Text.type;
    }
  | {
      type: typeof ValidURL.type;
    };

import { BCP47 } from "./bcp-47";
import { BooleanAttribute } from "./boolean-attribute";
import { CommaSeparatedTokens } from "./comma-separated-tokens";
import { CSSColor } from "./css-color";
import {
  EnumeratedAttribute,
  EnumeratedAttributeOptions,
} from "./enumerated-attribute";
import { FloatingPointNumber } from "./floating-point-number";
import { ID } from "./id";
import { MIMEType } from "./mime-type";
import {
  NonNegativeInteger,
  NonNegativeIntegerOptions,
} from "./non-negative-integer";
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
    }
  | {
      type: typeof NonNegativeInteger.type;
      options: NonNegativeIntegerOptions;
    }
  | {
      type: typeof ID.type;
    }
  | {
      type: typeof FloatingPointNumber.type;
    }
  | {
      type: typeof CommaSeparatedTokens.type;
    }
  | {
      type: typeof CSSColor.type;
    }
  | {
      type: typeof BCP47.type;
    }
  | {
      type: typeof MIMEType.type;
    }
  | {
      type: "#or";
      items: Exclude<AnyAttribute, { type: "#or" }>[];
    };

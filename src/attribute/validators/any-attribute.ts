import { RegularExpression } from "./regular-expression.js";
import { BCP47 } from "./bcp-47.js";
import { BooleanAttribute } from "./boolean-attribute.js";
import { CommaSeparatedTokens } from "./comma-separated-tokens.js";
import { CSSColor } from "./css-color.js";
import { DateString } from "./date-string.js";
import {
  EnumeratedAttribute,
  type EnumeratedAttributeOptions,
} from "./enumerated-attribute.js";
import { FloatingPointNumber } from "./floating-point-number.js";
import { ID } from "./id.js";
import { MIMEType } from "./mime-type.js";
import {
  NonNegativeInteger,
  type NonNegativeIntegerOptions,
} from "./non-negative-integer.js";
import { SignedInteger } from "./signed-integer.js";
import {
  SpaceSeparatedTokens,
  type SpaceSeparatedTokensOptions,
} from "./space-separated-tokens.js";
import { Text } from "./text.js";
import { ValidURL, type ValidURLOptions } from "./valid-url.js";
import { HashNameReference } from "./hash-name-reference.js";
import { NavigableTargetName } from "./navigable-target-name.js";
import { SrcsetAttribute } from "./srcset-attribute.js";
import { MediaQueryList } from "./media-query-list.js";
import { SourceSizeList } from "./source-size-list.js";
import { FloatingPointNumberList } from "./floating-point-number-list.js";
import { AutocompleteAttribute } from "./autocomplete-attribute.js";

export type AnyAttribute =
  | ({
      type: typeof SpaceSeparatedTokens.type;
    } & SpaceSeparatedTokensOptions)
  | ({
      type: typeof EnumeratedAttribute.type;
    } & EnumeratedAttributeOptions)
  | {
      type: typeof BooleanAttribute.type;
    }
  | {
      type: typeof SignedInteger.type;
    }
  | {
      type: typeof Text.type;
    }
  | ({
      type: typeof ValidURL.type;
    } & ValidURLOptions)
  | ({
      type: typeof NonNegativeInteger.type;
    } & NonNegativeIntegerOptions)
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
      type: typeof DateString.type;
    }
  | {
      type: typeof RegularExpression.type;
    }
  | {
      type: typeof HashNameReference.type;
    }
  | {
      type: typeof NavigableTargetName.type;
    }
  | {
      type: typeof SrcsetAttribute.type;
    }
  | {
      type: typeof MediaQueryList.type;
    }
  | {
      type: typeof SourceSizeList.type;
    }
  | {
      type: typeof FloatingPointNumberList.type;
    }
  | {
      type: typeof AutocompleteAttribute.type;
    }
  | {
      type: "#or";
      items: Exclude<AnyAttribute, { type: "#or" }>[];
    };

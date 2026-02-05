import {
  AttributeSpecDefinition,
  SpaceSeperatedTokens,
} from "../common/microsyntaxes";
import { BooleanAttributes } from "../common/microsyntaxes/boolean-attributes";
import { EnumeratedAttributes } from "../common/microsyntaxes/enumerated-attributes";

export const globalAttributes: Record<string, AttributeSpecDefinition> = {
  accessKey: {
    type: SpaceSeperatedTokens.type,
    options: {
      unique: true,
    },
  },
  autocapitalize: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["off", "none", "on", "sentences", "words", "characters"],
    },
  },
  autocorrect: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["on", "off"],
    },
  },
  autofocus: {
    type: BooleanAttributes.type,
  },
  contenteditable: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["true", "false", "plaintext-only	"],
    },
  },
};

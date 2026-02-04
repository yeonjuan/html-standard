import {
  AttributeSpecDefinition,
  SpaceSeperatedTokens,
} from "../common/microsyntaxes";
import { EnumeratedAttributes } from "../common/microsyntaxes/enumerated-attributes";

export const accessKey: AttributeSpecDefinition = {
  type: SpaceSeperatedTokens.type,
  options: {
    unique: true,
  },
};

export const autocapitalize: AttributeSpecDefinition = {
  type: EnumeratedAttributes.type,
  options: {
    keywords: ["off", "none", "on", "sentences", "words", "characters"],
  },
};

import {
  AttributeSpecDefinition,
  SpaceSeperatedTokens,
} from "../common/microsyntaxes";
import { EnumeratedAttributes } from "../common/microsyntaxes/enumerated-attributes";

export const globalAttributes: Record<string, AttributeSpecDefinition> = {
  /**
   * @see https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute
   */
  accessKey: {
    type: SpaceSeperatedTokens.type,
    options: {
      unique: true,
    },
  },
  /**
   * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize
   */
  autocapitalize: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["off", "none", "on", "sentences", "words", "characters"],
    },
  },
  /**
   * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-autocorrect
   */
  autocorrect: {
    type: EnumeratedAttributes.type,
    options: {
      keywords: ["on", "off"],
    },
  },
};

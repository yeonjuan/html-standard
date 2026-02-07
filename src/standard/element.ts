import { AttributeSpecDefinition, Text } from "../common/microsyntaxes";
import { EnumeratedAttributes } from "../common/microsyntaxes/enumerated-attributes";
import { ROLES } from "../constants/roles";
import { ElementState } from "../core";
import { ValidURL } from "./common";

interface ElementSpec {
  implicitRole: (element: ElementState) => string | null;
  globalAttributes: boolean;
  attributes: [string, AttributeSpecDefinition][];
}

export const elements: Record<string, ElementSpec> = {
  html: {
    implicitRole: () => ROLES.DOCUMENT,
    globalAttributes: true,
    attributes: [],
  },
  base: {
    implicitRole: () => null,
    globalAttributes: true,
    attributes: [
      [
        "href",
        {
          type: ValidURL.type,
        },
      ],
    ],
  },
  link: {
    implicitRole: () => null,
    globalAttributes: true,
    attributes: [
      [
        "href",
        {
          type: ValidURL.type,
        },
      ],
      [
        "crossorigin",
        {
          type: EnumeratedAttributes.type,
          options: {
            keywords: ["anonymous", "use-credentials"],
          },
        },
      ],
    ],
  },
};

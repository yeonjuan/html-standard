import { globalAttributes } from "../attributes";

export const ELEMENTS: Record<string, { attributes: any[] }> = {
  html: {
    attributes: [globalAttributes],
  },
  head: {
    attributes: [globalAttributes],
  },
  title: {
    attributes: [globalAttributes],
  },
  base: {
    attributes: [
      globalAttributes,
      {
        href: {},
      },
    ],
  },
};

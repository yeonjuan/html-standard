import type { ContentConstraint, ContentConstraintValue } from "../types";

export const contentConstraint = {
  fromEntries(entries: [string, ContentConstraintValue][]): ContentConstraint {
    return new Map(entries);
  },
  fromSets(
    value: ContentConstraintValue,
    ...sets: Set<string>[]
  ): ContentConstraint {
    return new Map(
      sets
        .reduce<string[]>((acc, set) => [...acc, ...set], [])
        .map((key) => [key, value]),
    );
  },
};

export const required: ContentConstraintValue = {
  required: true,
};

export const onlyOne: ContentConstraintValue = {
  max: 1,
};

export const disallow: ContentConstraintValue = {
  disallow: true,
};

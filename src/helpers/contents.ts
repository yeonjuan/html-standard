import type { ReadonlySet } from "../types";

export const contents = {
  fromKeys(...keys: string[]): ReadonlySet {
    return new Set(keys);
  },
  fromSet(set: Set<string>, ...keys: string[]): ReadonlySet {
    const result = new Set(set);
    keys.forEach((key) => set.add(key));
    return result;
  },
  fromUnionSets(setA: Set<string>, setB: Set<string>): ReadonlySet {
    const set = new Set(...setA, ...setB);
    return set;
  },
};

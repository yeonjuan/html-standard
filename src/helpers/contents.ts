import type { ReadonlySet } from "../types";

export const contents = {
  fromKeys(...keys: string[]): ReadonlySet<string> {
    return new Set(keys);
  },
  fromSet(set: Set<string>, ...keys: string[]): ReadonlySet<string> {
    const result = new Set(set);
    keys.forEach((key) => set.add(key));
    return result;
  },
  fromUnionSets(setA: Set<string>, setB: Set<string>): ReadonlySet<string> {
    const set = new Set(...setA, ...setB);
    return set;
  },
};

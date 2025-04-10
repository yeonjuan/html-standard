export const setsToMap = <T>(value: T, ...sets: Set<string>[]) =>
  new Map(
    sets
      .reduce<string[]>((acc, set) => [...acc, ...set], [])
      .map((key) => [key, value]),
  );

export const addToSet = (set: Set<string>, ...keys: string[]): Set<string> => {
  const result = new Set(set);
  keys.forEach((key) => set.add(key));
  return result;
};

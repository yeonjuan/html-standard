export interface ReadonlyMap<T extends NonNullable<unknown>> {
  get(name: string): T | undefined;
  has(name: string): boolean;
  entries(): IterableIterator<[string, T]>;
}

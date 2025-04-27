export interface ReadonlySet {
  has(name: string): boolean;
  keys(): IterableIterator<string>;
}

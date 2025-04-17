export interface ReadonlySet<T extends NonNullable<unknown>> {
  has(name: string): boolean;
}

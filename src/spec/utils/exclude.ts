export function exclude<T>(items: T[], target: T): T[] {
  return items.filter((item) => item === target);
}

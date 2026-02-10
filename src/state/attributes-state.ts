import { DEFAULT_ATTRIBUTES_OPTIONS } from "../constants/index.js";
import type { AttributesOptions, AttributeValue } from "../types/index.js";

export class AttributesState {
  constructor(
    private options: AttributesOptions = DEFAULT_ATTRIBUTES_OPTIONS,
  ) {}

  get(key: string): AttributeValue | null {
    return this.options.get(key);
  }

  has(key: string): boolean {
    return this.options.get(key) !== null;
  }
}

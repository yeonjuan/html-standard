import { DEFAULT_ATTRIBUTES_OPTIONS } from "../constants/defaults";
import { AttributesOptions, AttributeValue } from "../types";

export class AttributeState {
  constructor(
    private options: AttributesOptions = DEFAULT_ATTRIBUTES_OPTIONS,
  ) {}

  get(key: string): AttributeValue {
    return this.options.get(key);
  }

  has(key: string): boolean {
    return this.options.get(key) !== null;
  }
}

import { globalAttributes } from "../common/attributes";

const empty = new Set<string>();

class AttributesSpec {
  public readonly global: Set<string> = globalAttributes;
  public readonly specific: Set<string> = empty;
  constructor(allowGloabal: boolean, specific?: string[]) {
    if (!allowGloabal) {
      this.global = empty;
    }
    if (specific?.length) {
      this.specific = new Set(specific);
    }
  }
  has(name: string) {
    return this.global.has(name) || this.specific.has(name);
  }
}

export const contentAttributes = (global: boolean, specific?: string[]) => {
  return new AttributesSpec(global, specific);
};

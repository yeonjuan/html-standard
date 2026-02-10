import { AttributeSpec } from "./attribute-spec.js";
import type { AnyAttribute } from "./attributes/any-attribute.js";
import { globalAttributes } from "./attributes/global-attributes.js";
import { elementSpecDefinitionMap } from "./specs/index.js";
import type { ElementState } from "./state/index.js";
import * as types from "./types/index.js";

export class AttributeSpecMap implements types.AttributeSpecMap {
  constructor(private state: ElementState) {}

  private getSpecDefinition(): types.ElementSpecDefinition | null {
    const spec = elementSpecDefinitionMap[this.state.name];
    return spec ?? null;
  }

  get = (key: string): types.AttributeSpec | null => {
    const def = this.getSpecDefinition();
    if (!def) {
      return null;
    }
    let spec: AnyAttribute | null = null;
    if (def.globalAttributes) {
      spec = globalAttributes.get(key) ?? null;
      if (!spec) {
        return null;
      }
    }
    spec = def?.attributes.find(([k]) => key.toLowerCase() === k)?.[1] ?? null;
    if (spec) {
      return new AttributeSpec(key, spec);
    }
    return null;
  };
  has = (key: string): boolean => {
    const def = this.getSpecDefinition();
    if (def?.globalAttributes) {
      const has = globalAttributes.has(key);
      if (has) {
        return true;
      }
    }
    const found = def?.attributes.find(([k]) => key.toLowerCase() === k);
    return !!found;
  };
}

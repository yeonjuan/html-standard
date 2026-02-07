import { ElementState } from "./element-state";
import { AttributeSpec, ContentAttributesSpec } from "../types";

export class Attributes implements ContentAttributesSpec {
  constructor(private state: ElementState) {}

  has(key: string): boolean {
    return true;
  }

  get(key: string): AttributeSpec | null {
    return null;
  }
}

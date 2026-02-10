import type { AnyAttribute } from "./validators/index.js";
import * as types from "../types/index.js";
import { createAttributeSpec } from "./create-attribute-spec.js";

export class AttributeSpec implements types.AttributeSpec {
  constructor(
    private key: string,
    private definition: AnyAttribute,
  ) {}

  validate(value: types.AttributeValue): types.AttributeSpecValidateResult {
    const spec = createAttributeSpec(this.key, this.definition);
    return spec.validate(value);
  }
}

import { IMPLICIT_ROLE } from "../accessibility/implicit-role.js";
import { AttributeSpecMap } from "../attribute/attribute-spec-map.js";
import { ElementState } from "./element-state.js";
import * as types from "../types/index.js";

export class ElementSpec implements types.ElementSpec {
  private state: ElementState;
  constructor(name: string, options: types.ElementOptions) {
    this.state = new ElementState(name, options);
  }

  implicitRole = () => {
    const role = IMPLICIT_ROLE[this.state.name];
    if (role) {
      return role(this.state);
    }
    return null;
  };

  get attributes() {
    return new AttributeSpecMap(this.state);
  }
}

import { Accessibility } from "./accessibility";
import { ElementState } from "./element-state";
import { Attributes } from "./attributes";
import { ElementSpec, ElementOptions } from "../types";

export class Element implements ElementSpec {
  private state: ElementState;

  constructor(name: string, options: ElementOptions) {
    this.state = new ElementState(name, options);
  }

  get accessibility() {
    return new Accessibility(this.state);
  }

  get attributes() {
    return new Attributes(this.state);
  }
}

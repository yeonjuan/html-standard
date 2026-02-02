import { accessibility } from "./accessibility";
import { ElementState } from "./types";

class Element {
  constructor(public state: ElementState) {}

  get accessibility() {
    return accessibility(this.state);
  }
}

export function element(state: ElementState) {
  return new Element(state);
}

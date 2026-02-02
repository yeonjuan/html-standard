import { accessibility } from "./accessibility";
import { DEFAULT_ELEMENT_OPTIONS } from "./constants";
import { ElementSpec, ElementOptions } from "./types";

class Element implements ElementSpec {
  constructor(
    private name: string,
    private options: ElementOptions,
  ) {}

  get accessibility() {
    return accessibility(this.name, this.options);
  }
}

export function element(
  name: string,
  options: ElementOptions = DEFAULT_ELEMENT_OPTIONS,
): ElementSpec {
  return new Element(name, options);
}

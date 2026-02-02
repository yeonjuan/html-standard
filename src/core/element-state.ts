import { ElementOptions } from "../types";
import { AttributeState } from "./attribute-state";

export class ElementState {
  public readonly name: string;

  constructor(
    name: string,
    private options: ElementOptions,
  ) {
    this.name = name.toLowerCase();
  }

  get attributes(): AttributeState {
    return new AttributeState(this.options.attributes);
  }

  parent(): ElementState | null {
    if (!this.options.ancestors) {
      return null;
    }

    const iterator = this.options.ancestors()[Symbol.iterator]();
    const first = iterator.next();

    if (first.done || !first.value) {
      return null;
    }

    return new ElementState(first.value.name, first.value);
  }

  anceters(): Iterable<
    {
      name: string;
    } & ElementOptions
  > {
    return this.options.ancestors?.() || [];
  }
}

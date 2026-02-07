import { DEFAULT_ELEMENT_OPTIONS } from "./constants";
import type { ElementOptions, ElementSpec } from "./types";
import { Element } from "./core";

export function element(
  name: string,
  options: ElementOptions = DEFAULT_ELEMENT_OPTIONS,
): ElementSpec {
  return new Element(name, options);
}

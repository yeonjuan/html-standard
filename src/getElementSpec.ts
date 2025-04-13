import { GetElementSpec } from "./elements/types";
import * as elementsSpecs from "./elements";

const specsRecord: Record<string, GetElementSpec> = elementsSpecs;

export function getElementSpec(name: string): GetElementSpec | null {
  return specsRecord[name.toLowerCase()] || null;
}

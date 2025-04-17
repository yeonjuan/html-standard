import { ElementSpec, GetElementSpec } from "./types";
import * as elementsSpecs from "./elements";

const specsRecord: Record<string, GetElementSpec> = elementsSpecs;

type Options = {
  parent?: string;
  attributes?: Record<string, string | boolean>;
};

export function getElementSpec(
  name: string,
  options?: Options,
): ElementSpec | null {
  const getSpec = specsRecord[name.toLowerCase()] || null;
  if (!getSpec) {
    return null;
  }
  return getSpec(options);
}

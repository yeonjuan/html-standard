import { ElementSpec } from "./element-spec.js";
import type { ElementOptions } from "../types/index.js";

export function element(name: string, options: ElementOptions = {}) {
  return new ElementSpec(name, options);
}

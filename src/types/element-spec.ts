import type { AnyAttribute } from "../attributes/any-attribute.js";
import type { ElementState } from "../element-state.js";

export interface ElementSpec {
  globalAttributes: boolean;
  attributes: [string, AnyAttribute][];
  /**
   * https://www.w3.org/TR/html-aria/
   */
  // implicitRole: (element: ElementState) => string | null;
}

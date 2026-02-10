import type { AnyAttribute } from "../attributes/any-attribute.js";

export interface ElementSpecDefinition {
  globalAttributes: boolean;
  attributes: [string, AnyAttribute][];
  /**
   * https://www.w3.org/TR/html-aria/
   */
  // implicitRole: (element: ElementState) => string | null;
}

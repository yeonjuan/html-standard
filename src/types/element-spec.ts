import { AnyAttribute } from "../attributes/any-attribute";
import { ElementState } from "../element-state";

export interface ElementSpec {
  globalAttributes: boolean;
  attributes: [string, AnyAttribute][];
  /**
   * https://www.w3.org/TR/html-aria/
   */
  // implicitRole: (element: ElementState) => string | null;
}

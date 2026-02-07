import { ElementState } from "../element-state";

export interface ElementSpec {
  implicitRole: (element: ElementState) => string | null;
}

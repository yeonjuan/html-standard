import { ElementState } from "../core";
import type { AccessibilitySpec, ElementOptions } from "../types";
import { IMPLICIT_ROLE } from "./implicit-role";

class Accessibility implements AccessibilitySpec {
  constructor(private element: ElementState) {}

  implicitRole(): string | null {
    return (
      IMPLICIT_ROLE[this.element.name.toLowerCase()]?.(this.element) ?? null
    );
  }
}

export function accessibility(
  name: string,
  options: ElementOptions,
): AccessibilitySpec {
  return new Accessibility(new ElementState(name, options));
}

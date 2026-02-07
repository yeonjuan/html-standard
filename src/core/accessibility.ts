import { ElementState } from "../core";
import type { AccessibilitySpec } from "../types";
import { IMPLICIT_ROLE } from "../aria/implicit-role";

export class Accessibility implements AccessibilitySpec {
  constructor(private state: ElementState) {}

  implicitRole(): string | null {
    return IMPLICIT_ROLE[this.state.name.toLowerCase()]?.(this.state) ?? null;
  }
}

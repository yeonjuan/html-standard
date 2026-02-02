import type { ElementState } from "../types";
import { IMPLICIT_ROLE } from "./implicit-role";

class Accessibility {
  constructor(public state: ElementState) {}

  /**
   * Returns the implicit ARIA role of the HTML element.
   * Determines the default ARIA role based on the element name and its attributes
   * according to the HTML-ARIA specification.
   *
   * @returns The implicit ARIA role string (e.g., "button", "navigation", "generic"),
   *          or `null` if the element has no implicit role.
   */
  implicitRole(): string | null {
    const getRole = IMPLICIT_ROLE[this.state.name.toLowerCase()];
    if (!getRole) {
      return null;
    }
    return getRole({
      get: (key: string) => {
        if (this.state.attributes) {
          return this.state.attributes.get(key);
        }
        return null;
      },
      has: (key: string) => {
        if (this.state.attributes) {
          return this.state.attributes.get(key) !== null;
        }
        return false;
      },
    });
  }
}

export function accessibility(state: ElementState) {
  return new Accessibility(state);
}

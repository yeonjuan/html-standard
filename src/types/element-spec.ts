import type { AttributeSpecMap } from "./attribute-spec-map.js";

export interface ElementSpec {
  implicitRole: () => string | null;
  attributes: AttributeSpecMap;
}

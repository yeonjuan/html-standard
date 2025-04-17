import type { ContentModel } from "./content-model";
import type { AttributesSpecMap } from "./attributes-spec-map";

export interface ElementSpec {
  contents: ContentModel[] | null;
  attributes: AttributesSpecMap;
}

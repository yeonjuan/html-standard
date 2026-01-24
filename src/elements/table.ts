import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const tableSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const table: GetElementSpec = () => tableSpec;

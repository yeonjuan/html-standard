import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const summarySpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const summary: GetElementSpec = () => summarySpec;

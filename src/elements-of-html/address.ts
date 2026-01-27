import { contentConstraint, disallow } from "../helpers";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const addressSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const address: GetElementSpec = () => addressSpec;

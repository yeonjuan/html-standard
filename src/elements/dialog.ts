import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const dialogSpec: ElementSpec = {
  attributes: contentAttributes(true, ["closedby", "open"]),
};

export const dialog: GetElementSpec = () => dialogSpec;

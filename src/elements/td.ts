import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const tdSpec: ElementSpec = {
  attributes: contentAttributes(true, ["colspan", "rowspan", "headers"]),
};

export const td: GetElementSpec = () => tdSpec;

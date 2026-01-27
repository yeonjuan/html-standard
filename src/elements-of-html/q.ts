import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const qSpec: ElementSpec = {
  attributes: contentAttributes(true, ["cite"]),
};

export const q: GetElementSpec = () => qSpec;

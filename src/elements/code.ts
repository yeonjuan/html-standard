import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const codeSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const code: GetElementSpec = () => codeSpec;

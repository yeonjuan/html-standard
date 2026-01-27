import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const theadSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const thead: GetElementSpec = () => theadSpec;

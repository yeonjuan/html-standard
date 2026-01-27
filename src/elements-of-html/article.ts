import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const articleSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const article: GetElementSpec = () => articleSpec;

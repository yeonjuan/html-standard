import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const figureSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const figure: GetElementSpec = () => figureSpec;

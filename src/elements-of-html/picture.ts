import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const pictureSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const picture: GetElementSpec = () => pictureSpec;

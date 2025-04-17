import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const embedSpec: ElementSpec = {
  contents: null,
  attributes: contentAttributes(true, ["src", "type", "width", "height"]),
};

export const embed: GetElementSpec = () => embedSpec;

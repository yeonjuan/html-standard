import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const canvasSpec: ElementSpec = {
  attributes: contentAttributes(true, ["width", "height"]),
};

export const canvas: GetElementSpec = () => canvasSpec;

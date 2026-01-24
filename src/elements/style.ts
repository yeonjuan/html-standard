import type { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const styleSpec: ElementSpec = {
  attributes: contentAttributes(true, ["media", "blocking", "title"]),
};

export const style: GetElementSpec = () => styleSpec;

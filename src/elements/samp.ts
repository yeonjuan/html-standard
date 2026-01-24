import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const sampSpec: ElementSpec = {
  attributes: contentAttributes(true),
};

export const samp: GetElementSpec = () => sampSpec;

import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const meterSpec: ElementSpec = {
  attributes: contentAttributes(true, [
    "value",
    "min",
    "max",
    "low",
    "high",
    "optimum",
  ]),
};

export const meter: GetElementSpec = () => meterSpec;

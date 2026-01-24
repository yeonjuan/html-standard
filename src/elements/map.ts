import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const mapSpec: ElementSpec = {
  attributes: contentAttributes(true, ["name"]),
};

export const map: GetElementSpec = () => mapSpec;

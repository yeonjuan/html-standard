import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const timeWihthoutDatetimeSpec: ElementSpec = {
  attributes: contentAttributes(true, ["datetime"]),
};
const timeWithDatetimeSpec: ElementSpec = {
  attributes: contentAttributes(true, ["datetime"]),
};

export const time: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (!!attributes["datetime"]) {
    return timeWihthoutDatetimeSpec;
  }
  return timeWithDatetimeSpec;
};

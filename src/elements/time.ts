import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset } from "../helpers";

const timeWihthoutDatetimeSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.phrasingContent,
    },
  ],
  attributes: contentAttributes(true, ["datetime"]),
};
const timeWithDatetimeSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contentsPreset.text,
    },
  ],
  attributes: contentAttributes(true, ["datetime"]),
};

export const time: GetElementSpec = (state) => {
  const attributes = state?.attributes || {};
  if (!!attributes["datetime"]) {
    return timeWihthoutDatetimeSpec;
  }
  return timeWithDatetimeSpec;
};

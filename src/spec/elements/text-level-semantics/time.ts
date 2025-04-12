import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const timeWihthoutDatetimeSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.phrasingContent,
    },
  ],
  attributes: contentAttributes(true, ["datetime"]),
};
const timeWithDatetimeSpec: ElementSpec = {
  contents: [
    {
      type: "oneOrMore",
      contents: contents.text,
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

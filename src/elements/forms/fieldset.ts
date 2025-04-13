import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const fieldsetSpec: ElementSpec = {
  contents: [
    {
      type: "optional",
      contents: new Set("legend"),
    },
    {
      type: "oneOrMore",
      contents: contents.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["disabled", "form", "name"]),
};

export const fieldset: GetElementSpec = () => fieldsetSpec;

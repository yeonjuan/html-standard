import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contents, contentsPreset } from "../helpers";

const fieldsetSpec: ElementSpec = {
  contents: [
    {
      type: "optional",
      contents: contents.fromKeys("legend"),
    },
    {
      type: "oneOrMore",
      contents: contentsPreset.flowContent,
    },
  ],
  attributes: contentAttributes(true, ["disabled", "form", "name"]),
};

export const fieldset: GetElementSpec = () => fieldsetSpec;

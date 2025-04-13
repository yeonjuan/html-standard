import { addToSet } from "../../utils/set";
import { contents } from "../common/contents";
import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../utils/contentAttributes";

const datalistSpec: ElementSpec = {
  contents: [
    {
      type: "either",
      options: [
        [
          {
            type: "oneOrMore",
            contents: contents.phrasingContent,
          },
        ],
        [
          {
            type: "zeroOrMore",
            contents: addToSet(contents.scriptSupportingElements, "option"),
          },
        ],
      ],
    },
  ],
  attributes: contentAttributes(true),
};

export const datalist: GetElementSpec = () => datalistSpec;

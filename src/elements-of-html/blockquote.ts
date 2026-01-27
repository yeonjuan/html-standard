import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const blockquoteSpec: ElementSpec = {
  attributes: contentAttributes(true, ["cite"]),
};

export const blockquote: GetElementSpec = () => blockquoteSpec;

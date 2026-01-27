import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes } from "../helpers";

const fieldsetSpec: ElementSpec = {
  attributes: contentAttributes(true, ["disabled", "form", "name"]),
};

export const fieldset: GetElementSpec = () => fieldsetSpec;

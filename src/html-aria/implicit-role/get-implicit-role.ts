import { GetImplicitRoleOptions } from "./types";
import { getImplicitRoleInternal } from "./implicit-role";

const DEFAULT_OPTIONS: GetImplicitRoleOptions = {
  attribute: () => null,
};

export function getImplicitRole(
  element: string,
  options: GetImplicitRoleOptions = DEFAULT_OPTIONS,
): string | null {
  return getImplicitRoleInternal(element, options.attribute);
}

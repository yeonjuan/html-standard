export type GetAttributeValue = (key: string) => string | number | null;

export interface GetImplicitRoleOptions {
  attribute: GetAttributeValue;
}

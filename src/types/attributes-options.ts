import type { AttributeValue } from "./attribute-value";

/**
 * Options for accessing element attributes.
 */
export interface AttributesOptions {
  /**
   * Retrieves the value of the specified attribute.
   *
   * @param key - The attribute name to retrieve
   * @returns The attribute value, or `null` if the attribute does not exist
   */
  get(key: string): AttributeValue;
}

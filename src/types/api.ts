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

/**
 * Options for configuring element behavior and context.
 */
export interface ElementOptions {
  /**
   * Optional attributes accessor for the element.
   */
  attributes?: AttributesOptions;

  /**
   * Optional function that returns an iterable of ancestor elements.
   * The iterable provides access to parent and ancestor element information.
   *
   * @returns An iterable of ancestor element options, with the first element being the direct parent
   */
  ancestors?: () => Iterable<
    {
      name: string;
    } & ElementOptions
  >;
}

/**
 * Specification for accessibility-related functionality of HTML elements.
 */
export interface AccessibilitySpec {
  /**
   * Returns the implicit ARIA role of the HTML element.
   * Determines the default ARIA role based on the element name and its attributes
   * according to the HTML-ARIA specification.
   *
   * @returns The implicit ARIA role string (e.g., "button", "navigation", "generic"),
   *          or `null` if the element has no implicit role.
   */
  implicitRole(): string | null;
}

/**
 * Specification for HTML element functionality.
 */
export interface ElementSpec {
  /**
   * Accessibility-related functionality for the element.
   */
  accessibility: AccessibilitySpec;

  attributes: ContentAttributesSpec;
}

export type AttributeSpecValidateResult = {
  success: boolean;
  message?: string;
};
export interface AttributeSpec {
  validate(value: AttributeValue): AttributeSpecValidateResult;
}

export interface ContentAttributesSpec {
  get(key: string): AttributeSpec | null;
  has(key: string): boolean;
}

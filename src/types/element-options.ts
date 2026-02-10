import type { AttributesOptions } from "./attributes-options.js";

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

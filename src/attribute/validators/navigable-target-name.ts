import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";

/**
 * Validates a navigable target name (browsing context name).
 *
 * A valid navigable target name is any string with at least one character that:
 * - Does not contain ASCII tab (\t), newline (\n), or U+003C (<)
 * - Does not start with U+005F (_) - reserved for special keywords like _blank, _self, _parent, _top
 *
 * @see https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name
 */
export class NavigableTargetName implements AttributeSpec {
  static type = "NavigableTargetName" as const;

  static Type = {
    type: NavigableTargetName.type,
  };

  constructor() {}

  // Pattern to detect invalid characters: tab, newline, or <
  private static readonly INVALID_CHARS_PATTERN = /[\t\n<]/;

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    // Must have at least one character
    if (value.length === 0) {
      return invalid("Navigable target name must have at least one character");
    }

    // Cannot start with underscore (_) - reserved for keywords
    if (value.startsWith("_")) {
      return invalid(
        `Navigable target name cannot start with "_" (reserved for keywords like _blank, _self): "${value}"`,
      );
    }

    // Cannot contain tab, newline, or <
    if (NavigableTargetName.INVALID_CHARS_PATTERN.test(value)) {
      return invalid(
        `Navigable target name cannot contain tab, newline, or "<" character: "${value}"`,
      );
    }

    return valid();
  }
}

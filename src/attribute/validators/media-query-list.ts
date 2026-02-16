import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";
import { ERROR_MESSAGES } from "./error-messages.js";
import { getCSSLanguageService } from "vscode-css-languageservice";
import { TextDocument } from "vscode-languageserver-textdocument";

export class MediaQueryList implements AttributeSpec {
  static type = "MediaQueryList" as const;
  private cssLanguageService = getCSSLanguageService();

  static Type = {
    type: MediaQueryList.type,
  };

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    try {
      const cssText = `@media ${value} {}`;
      const document = TextDocument.create("test.css", "css", 1, cssText);

      const stylesheet = this.cssLanguageService.parseStylesheet(document);
      const diagnostics = this.cssLanguageService.doValidation(
        document,
        stylesheet,
      );

      if (diagnostics.length > 0) {
        return invalid(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
      }

      return valid();
    } catch (error) {
      return invalid(ERROR_MESSAGES.INVALID_MEDIA_QUERY_LIST);
    }
  }
}

import type {
  AttributeValue,
  AttributeSpec,
  AttributeSpecValidateResult,
} from "../../types/index.js";
import { valid, invalid } from "../../shared/result.js";

/**
 * Validates the `datetime` attribute of the `<time>` element, which per spec
 * accepts the union of: a valid month string, date string, yearless date
 * string, week string, time string, local date and time string, time-zone
 * offset string, global date and time string, plain-digit year, or duration
 * string.
 *
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-time-datetime
 * @see https://html.spec.whatwg.org/multipage/common-microsyntaxes.html
 */
export class TimeString implements AttributeSpec {
  static type = "TimeString" as const;

  static Type = {
    type: TimeString.type,
  };

  constructor() {}

  private static readonly MONTH_PATTERN = /^(\d{4,})-(\d{2})$/;
  private static readonly DATE_PATTERN = /^(\d{4,})-(\d{2})-(\d{2})$/;
  private static readonly YEARLESS_DATE_PATTERN = /^(\d{2})-(\d{2})$/;
  private static readonly WEEK_PATTERN = /^(\d{4,})-W(\d{2})$/;
  private static readonly TIME_PATTERN =
    /^(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/;
  private static readonly LOCAL_DATE_AND_TIME_PATTERN =
    /^(\d{4,})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/;
  private static readonly TIME_ZONE_OFFSET_PATTERN = /^(?:Z|[+-]\d{2}:?\d{2})$/;
  private static readonly GLOBAL_DATE_AND_TIME_PATTERN =
    /^(\d{4,})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?(Z|[+-]\d{2}:?\d{2})$/;
  private static readonly YEAR_PATTERN = /^\d{4,}$/;
  private static readonly DURATION_ISO_PATTERN =
    /^P(?=[0-9T])(?:(\d+)W)?(?:(\d+)D)?(?:T(?=[0-9])(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i;
  private static readonly DURATION_SPACE_PATTERN =
    /^(?:(\d+)w)?\s*(?:(\d+)d)?\s*(?:(\d+)h)?\s*(?:(\d+)m)?\s*(?:(\d+(?:\.\d+)?)s)?$/i;

  private validateYear(year: number, value: string): string | null {
    if (year === 0) {
      return `Year must be greater than 0: "${value}"`;
    }
    return null;
  }

  private validateMonth(month: number, value: string): string | null {
    if (month < 1 || month > 12) {
      return `Month must be between 1 and 12: "${value}"`;
    }
    return null;
  }

  private validateDay(day: number, value: string): string | null {
    // Simplified - doesn't account for leap years and month lengths.
    if (day < 1 || day > 31) {
      return `Day must be between 1 and 31: "${value}"`;
    }
    return null;
  }

  private validateWeek(week: number, value: string): string | null {
    if (week < 1 || week > 53) {
      return `Week must be between 1 and 53: "${value}"`;
    }
    return null;
  }

  private validateTimeComponents(
    hour: number,
    minute: number,
    second: number | undefined,
    value: string,
  ): string | null {
    if (hour > 23) {
      return `Hour must be between 0 and 23: "${value}"`;
    }
    if (minute > 59) {
      return `Minute must be between 0 and 59: "${value}"`;
    }
    if (second !== undefined && second > 59) {
      return `Second must be between 0 and 59: "${value}"`;
    }
    return null;
  }

  validateValue(value: AttributeValue): AttributeSpecValidateResult {
    let match: RegExpMatchArray | null;

    if ((match = value.match(TimeString.MONTH_PATTERN))) {
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10);
      const error =
        this.validateYear(year, value) || this.validateMonth(month, value);
      return error ? invalid(error) : valid();
    }

    if ((match = value.match(TimeString.WEEK_PATTERN))) {
      const year = parseInt(match[1], 10);
      const week = parseInt(match[2], 10);
      const error =
        this.validateYear(year, value) || this.validateWeek(week, value);
      return error ? invalid(error) : valid();
    }

    if ((match = value.match(TimeString.GLOBAL_DATE_AND_TIME_PATTERN))) {
      const [, y, mo, d, h, mi, s] = match;
      const error =
        this.validateYear(parseInt(y, 10), value) ||
        this.validateMonth(parseInt(mo, 10), value) ||
        this.validateDay(parseInt(d, 10), value) ||
        this.validateTimeComponents(
          parseInt(h, 10),
          parseInt(mi, 10),
          s === undefined ? undefined : parseInt(s, 10),
          value,
        );
      return error ? invalid(error) : valid();
    }

    if ((match = value.match(TimeString.LOCAL_DATE_AND_TIME_PATTERN))) {
      const [, y, mo, d, h, mi, s] = match;
      const error =
        this.validateYear(parseInt(y, 10), value) ||
        this.validateMonth(parseInt(mo, 10), value) ||
        this.validateDay(parseInt(d, 10), value) ||
        this.validateTimeComponents(
          parseInt(h, 10),
          parseInt(mi, 10),
          s === undefined ? undefined : parseInt(s, 10),
          value,
        );
      return error ? invalid(error) : valid();
    }

    if ((match = value.match(TimeString.DATE_PATTERN))) {
      const [, y, mo, d] = match;
      const error =
        this.validateYear(parseInt(y, 10), value) ||
        this.validateMonth(parseInt(mo, 10), value) ||
        this.validateDay(parseInt(d, 10), value);
      return error ? invalid(error) : valid();
    }

    if ((match = value.match(TimeString.YEARLESS_DATE_PATTERN))) {
      const [, mo, d] = match;
      const error =
        this.validateMonth(parseInt(mo, 10), value) ||
        this.validateDay(parseInt(d, 10), value);
      return error ? invalid(error) : valid();
    }

    if ((match = value.match(TimeString.TIME_PATTERN))) {
      const [, h, mi, s] = match;
      const error = this.validateTimeComponents(
        parseInt(h, 10),
        parseInt(mi, 10),
        s === undefined ? undefined : parseInt(s, 10),
        value,
      );
      return error ? invalid(error) : valid();
    }

    if (TimeString.TIME_ZONE_OFFSET_PATTERN.test(value)) {
      return valid();
    }

    if (TimeString.YEAR_PATTERN.test(value)) {
      const year = parseInt(value, 10);
      const error = this.validateYear(year, value);
      return error ? invalid(error) : valid();
    }

    if (
      TimeString.DURATION_ISO_PATTERN.test(value) &&
      value.length > 1 &&
      value !== "PT"
    ) {
      return valid();
    }

    if (
      value.trim() !== "" &&
      TimeString.DURATION_SPACE_PATTERN.test(value) &&
      /\d/.test(value)
    ) {
      return valid();
    }

    return invalid(`Invalid datetime string: "${value}"`);
  }
}

import { describe, expect, it } from "vitest";
import { TimeString } from "../time-string.js";

describe("TimeString", () => {
  const validator = new TimeString();

  describe("valid month string", () => {
    it("accepts YYYY-MM", () => {
      expect(validator.validateValue("2026-11").valid).toBe(true);
    });

    it("rejects month out of range", () => {
      expect(validator.validateValue("2026-13").valid).toBe(false);
    });
  });

  describe("valid date string", () => {
    it("accepts YYYY-MM-DD", () => {
      expect(validator.validateValue("2026-11-06").valid).toBe(true);
    });
  });

  describe("valid yearless date string", () => {
    it("accepts MM-DD", () => {
      expect(validator.validateValue("11-06").valid).toBe(true);
    });

    it("rejects day out of range", () => {
      expect(validator.validateValue("11-32").valid).toBe(false);
    });
  });

  describe("valid week string", () => {
    it("accepts YYYY-Www", () => {
      expect(validator.validateValue("2026-W45").valid).toBe(true);
    });

    it("rejects week out of range", () => {
      expect(validator.validateValue("2026-W54").valid).toBe(false);
    });
  });

  describe("valid time string", () => {
    it("accepts HH:MM", () => {
      expect(validator.validateValue("14:30").valid).toBe(true);
    });

    it("accepts HH:MM:SS.sss", () => {
      expect(validator.validateValue("14:54:39.929").valid).toBe(true);
    });

    it("rejects hour out of range", () => {
      expect(validator.validateValue("24:00").valid).toBe(false);
    });
  });

  describe("valid local date and time string", () => {
    it("accepts date and time without offset", () => {
      expect(validator.validateValue("2026-11-06T14:30").valid).toBe(true);
    });
  });

  describe("valid time-zone offset string", () => {
    it("accepts Z", () => {
      expect(validator.validateValue("Z").valid).toBe(true);
    });

    it("accepts colon form +HH:MM", () => {
      expect(validator.validateValue("+01:00").valid).toBe(true);
    });

    it("accepts colon-less form +HHMM", () => {
      expect(validator.validateValue("+0100").valid).toBe(true);
    });
  });

  describe("valid global date and time string", () => {
    it("accepts colon-less offset", () => {
      expect(validator.validateValue("2026-11-06T14:30+0100").valid).toBe(true);
    });

    it("accepts colon offset", () => {
      expect(validator.validateValue("2026-11-06T14:30+01:00").valid).toBe(
        true,
      );
    });
  });

  describe("plain year", () => {
    it("accepts YYYY", () => {
      expect(validator.validateValue("2026").valid).toBe(true);
    });

    it("rejects year 0000", () => {
      expect(validator.validateValue("0000").valid).toBe(false);
    });
  });

  describe("valid duration string", () => {
    it("accepts ISO-8601-like form", () => {
      expect(validator.validateValue("PT1H30M").valid).toBe(true);
    });

    it("accepts space-separated form", () => {
      expect(validator.validateValue("1h 30m").valid).toBe(true);
    });

    it("accepts seconds with fraction", () => {
      expect(validator.validateValue("PT4H18M3S").valid).toBe(true);
    });

    it("rejects bare P", () => {
      expect(validator.validateValue("P").valid).toBe(false);
    });
  });

  describe("invalid values", () => {
    it("rejects garbage strings", () => {
      expect(validator.validateValue("not-a-date").valid).toBe(false);
    });

    it("rejects empty string", () => {
      expect(validator.validateValue("").valid).toBe(false);
    });
  });
});

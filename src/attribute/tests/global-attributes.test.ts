import { describe, it, expect } from "vitest";
import { element } from "../../element/element.js";

describe("global attributes", () => {
  const div = element("div", {
    attributes: { get: () => null },
  });

  it("contenteditable accepts the empty string", () => {
    const result = div.attributes.get("contenteditable")!.validateValue("");
    expect(result.valid).toBe(true);
  });

  it("autocorrect accepts the empty string", () => {
    const result = div.attributes.get("autocorrect")!.validateValue("");
    expect(result.valid).toBe(true);
  });
});

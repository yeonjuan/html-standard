import { describe, it, expect } from "vitest";
import { getImplicitRole } from "../get-implicit-role";

describe("getImplicitRole", () => {
  describe("elements with no implicit role", () => {
    it("should return null for elements without implicit roles", () => {
      expect(getImplicitRole("abbr")).toBe(null);
      expect(getImplicitRole("audio")).toBe(null);
      expect(getImplicitRole("base")).toBe(null);
      expect(getImplicitRole("br")).toBe(null);
      expect(getImplicitRole("canvas")).toBe(null);
      expect(getImplicitRole("cite")).toBe(null);
      expect(getImplicitRole("col")).toBe(null);
      expect(getImplicitRole("colgroup")).toBe(null);
      expect(getImplicitRole("dd")).toBe(null);
      expect(getImplicitRole("dl")).toBe(null);
      expect(getImplicitRole("dt")).toBe(null);
      expect(getImplicitRole("embed")).toBe(null);
      expect(getImplicitRole("figcaption")).toBe(null);
      expect(getImplicitRole("footer")).toBe(null);
      expect(getImplicitRole("head")).toBe(null);
      expect(getImplicitRole("header")).toBe(null);
      expect(getImplicitRole("iframe")).toBe(null);
      expect(getImplicitRole("kbd")).toBe(null);
      expect(getImplicitRole("label")).toBe(null);
      expect(getImplicitRole("legend")).toBe(null);
      expect(getImplicitRole("li")).toBe(null);
      expect(getImplicitRole("link")).toBe(null);
      expect(getImplicitRole("map")).toBe(null);
      expect(getImplicitRole("mark")).toBe(null);
      expect(getImplicitRole("meta")).toBe(null);
      expect(getImplicitRole("noscript")).toBe(null);
      expect(getImplicitRole("object")).toBe(null);
      expect(getImplicitRole("param")).toBe(null);
      expect(getImplicitRole("picture")).toBe(null);
      expect(getImplicitRole("rp")).toBe(null);
      expect(getImplicitRole("rt")).toBe(null);
      expect(getImplicitRole("ruby")).toBe(null);
      expect(getImplicitRole("script")).toBe(null);
      expect(getImplicitRole("section")).toBe(null);
      expect(getImplicitRole("slot")).toBe(null);
      expect(getImplicitRole("style")).toBe(null);
      expect(getImplicitRole("sub")).toBe(null);
      expect(getImplicitRole("sup")).toBe(null);
      expect(getImplicitRole("svg")).toBe(null);
      expect(getImplicitRole("template")).toBe(null);
      expect(getImplicitRole("th")).toBe(null);
      expect(getImplicitRole("time")).toBe("time");
      expect(getImplicitRole("title")).toBe(null);
      expect(getImplicitRole("track")).toBe(null);
      expect(getImplicitRole("u")).toBe(null);
      expect(getImplicitRole("var")).toBe(null);
      expect(getImplicitRole("video")).toBe(null);
      expect(getImplicitRole("wbr")).toBe(null);
    });

    it("should return null for unknown elements", () => {
      expect(getImplicitRole("unknown-element")).toBe(null);
      expect(getImplicitRole("custom-element")).toBe(null);
    });
  });

  describe("generic role elements", () => {
    it("should return generic for generic elements", () => {
      expect(getImplicitRole("b")).toBe("generic");
      expect(getImplicitRole("bdi")).toBe("generic");
      expect(getImplicitRole("bdo")).toBe("generic");
      expect(getImplicitRole("body")).toBe("generic");
      expect(getImplicitRole("data")).toBe("generic");
      expect(getImplicitRole("div")).toBe("generic");
      expect(getImplicitRole("i")).toBe("generic");
      expect(getImplicitRole("pre")).toBe("generic");
      expect(getImplicitRole("q")).toBe("generic");
      expect(getImplicitRole("samp")).toBe("generic");
      expect(getImplicitRole("small")).toBe("generic");
      expect(getImplicitRole("span")).toBe("generic");
    });
  });

  describe("structural elements", () => {
    it("should return correct roles for structural elements", () => {
      expect(getImplicitRole("article")).toBe("article");
      expect(getImplicitRole("aside")).toBe("complementary");
      expect(getImplicitRole("main")).toBe("main");
      expect(getImplicitRole("nav")).toBe("navigation");
      expect(getImplicitRole("section")).toBe(null);
    });
  });

  describe("heading elements", () => {
    it("should return heading for all heading levels", () => {
      expect(getImplicitRole("h1")).toBe("heading");
      expect(getImplicitRole("h2")).toBe("heading");
      expect(getImplicitRole("h3")).toBe("heading");
      expect(getImplicitRole("h4")).toBe("heading");
      expect(getImplicitRole("h5")).toBe("heading");
      expect(getImplicitRole("h6")).toBe("heading");
    });
  });

  describe("list elements", () => {
    it("should return correct roles for list elements", () => {
      expect(getImplicitRole("ul")).toBe("list");
      expect(getImplicitRole("ol")).toBe("list");
      expect(getImplicitRole("menu")).toBe("list");
      expect(getImplicitRole("li")).toBe(null);
    });
  });

  describe("table elements", () => {
    it("should return correct roles for table elements", () => {
      expect(getImplicitRole("table")).toBe("table");
      expect(getImplicitRole("thead")).toBe("rowgroup");
      expect(getImplicitRole("tbody")).toBe("rowgroup");
      expect(getImplicitRole("tfoot")).toBe("rowgroup");
      expect(getImplicitRole("tr")).toBe("row");
      expect(getImplicitRole("td")).toBe("cell");
      expect(getImplicitRole("caption")).toBe("caption");
    });
  });

  describe("form elements", () => {
    it("should return correct roles for form elements", () => {
      expect(getImplicitRole("button")).toBe("button");
      expect(getImplicitRole("form")).toBe("form");
      expect(getImplicitRole("textarea")).toBe("textbox");
      expect(getImplicitRole("datalist")).toBe("listbox");
      expect(getImplicitRole("option")).toBe("option");
      expect(getImplicitRole("optgroup")).toBe("group");
      expect(getImplicitRole("output")).toBe("status");
      expect(getImplicitRole("progress")).toBe("progressbar");
      expect(getImplicitRole("meter")).toBe("meter");
      expect(getImplicitRole("fieldset")).toBe("group");
    });
  });

  describe("text semantic elements", () => {
    it("should return correct roles for text semantic elements", () => {
      expect(getImplicitRole("em")).toBe("emphasis");
      expect(getImplicitRole("strong")).toBe("strong");
      expect(getImplicitRole("code")).toBe("code");
      expect(getImplicitRole("del")).toBe("deletion");
      expect(getImplicitRole("ins")).toBe("insertion");
      expect(getImplicitRole("s")).toBe("deletion");
      expect(getImplicitRole("dfn")).toBe("term");
      expect(getImplicitRole("p")).toBe("paragraph");
      expect(getImplicitRole("blockquote")).toBe("blockquote");
    });
  });

  describe("other elements", () => {
    it("should return correct roles for other elements", () => {
      expect(getImplicitRole("html")).toBe("document");
      expect(getImplicitRole("dialog")).toBe("dialog");
      expect(getImplicitRole("details")).toBe("group");
      expect(getImplicitRole("summary")).toBe("button");
      expect(getImplicitRole("figure")).toBe("figure");
      expect(getImplicitRole("hr")).toBe("separator");
      expect(getImplicitRole("hgroup")).toBe("group");
      expect(getImplicitRole("address")).toBe("group");
      expect(getImplicitRole("search")).toBe("search");
    });
  });

  describe("attribute-dependent roles", () => {
    describe("anchor (a) element", () => {
      it("should return link when href attribute is present", () => {
        const result = getImplicitRole("a", {
          attribute: (key) => (key === "href" ? "https://example.com" : null),
        });
        expect(result).toBe("link");
      });

      it("should return generic when href attribute is not present", () => {
        const result = getImplicitRole("a", {
          attribute: () => null,
        });
        expect(result).toBe("generic");
      });
    });

    describe("area element", () => {
      it("should return link when href attribute is present", () => {
        const result = getImplicitRole("area", {
          attribute: (key) => (key === "href" ? "https://example.com" : null),
        });
        expect(result).toBe("link");
      });

      it("should return generic when href attribute is not present", () => {
        const result = getImplicitRole("area", {
          attribute: () => null,
        });
        expect(result).toBe("generic");
      });
    });

    describe("img element", () => {
      it("should return img when alt is not empty", () => {
        const result = getImplicitRole("img", {
          attribute: (key) => (key === "alt" ? "description" : null),
        });
        expect(result).toBe("img");
      });

      it("should return null when alt is empty string", () => {
        const result = getImplicitRole("img", {
          attribute: (key) => (key === "alt" ? "" : null),
        });
        expect(result).toBe(null);
      });

      it("should return img when alt attribute is not present", () => {
        const result = getImplicitRole("img", {
          attribute: () => null,
        });
        expect(result).toBe("img");
      });
    });

    describe("select element", () => {
      it("should return listbox when multiple attribute is present", () => {
        const result = getImplicitRole("select", {
          attribute: (key) => (key === "multiple" ? "multiple" : null),
        });
        expect(result).toBe("listbox");
      });

      it("should return combobox when multiple attribute is not present", () => {
        const result = getImplicitRole("select", {
          attribute: () => null,
        });
        expect(result).toBe("combobox");
      });
    });

    describe("input element", () => {
      it("should return button for button type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "button" : null),
        });
        expect(result).toBe("button");
      });

      it("should return button for image type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "image" : null),
        });
        expect(result).toBe("button");
      });

      it("should return button for reset type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "reset" : null),
        });
        expect(result).toBe("button");
      });

      it("should return button for submit type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "submit" : null),
        });
        expect(result).toBe("button");
      });

      it("should return checkbox for checkbox type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "checkbox" : null),
        });
        expect(result).toBe("checkbox");
      });

      it("should return radio for radio type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "radio" : null),
        });
        expect(result).toBe("radio");
      });

      it("should return textbox for text type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "text" : null),
        });
        expect(result).toBe("textbox");
      });

      it("should return textbox for email type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "email" : null),
        });
        expect(result).toBe("textbox");
      });

      it("should return textbox for tel type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "tel" : null),
        });
        expect(result).toBe("textbox");
      });

      it("should return textbox for url type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "url" : null),
        });
        expect(result).toBe("textbox");
      });

      it("should return spinbutton for number type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "number" : null),
        });
        expect(result).toBe("spinbutton");
      });

      it("should return slider for range type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "range" : null),
        });
        expect(result).toBe("slider");
      });

      it("should return searchbox for search type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "search" : null),
        });
        expect(result).toBe("searchbox");
      });

      it("should return null for color type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "color" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for date type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "date" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for datetime-local type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "datetime-local" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for file type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "file" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for hidden type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "hidden" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for month type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "month" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for password type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "password" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for time type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "time" : null),
        });
        expect(result).toBe(null);
      });

      it("should return null for week type", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "week" : null),
        });
        expect(result).toBe(null);
      });

      it("should return textbox when type attribute is not present (default)", () => {
        const result = getImplicitRole("input", {
          attribute: () => null,
        });
        expect(result).toBe("textbox");
      });

      it("should return textbox for unknown type (fallback)", () => {
        const result = getImplicitRole("input", {
          attribute: (key) => (key === "type" ? "unknown-type" : null),
        });
        expect(result).toBe("textbox");
      });
    });
  });

  describe("case insensitivity", () => {
    it("should handle uppercase element names", () => {
      expect(getImplicitRole("DIV")).toBe("generic");
      expect(getImplicitRole("BUTTON")).toBe("button");
      expect(getImplicitRole("NAV")).toBe("navigation");
    });

    it("should handle mixed case element names", () => {
      expect(getImplicitRole("DiV")).toBe("generic");
      expect(getImplicitRole("BuTtOn")).toBe("button");
      expect(getImplicitRole("nAv")).toBe("navigation");
    });
  });
});

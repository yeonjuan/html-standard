import {
  AutocompleteAttribute,
  BooleanAttribute,
  CommaSeparatedTokens,
  EnumeratedAttribute,
  NonNegativeInteger,
  SignedInteger,
  SpaceSeparatedTokens,
  Text,
  ValidURL,
  ID,
  FloatingPointNumber,
  CSSColor,
  BCP47,
  MIMEType,
  DateString,
  RegularExpression,
  HashNameReference,
  NavigableTargetName,
  SrcsetAttribute,
  MediaQueryList,
  SourceSizeList,
  FloatingPointNumberList,
  type AnyAttribute,
  OrValidator,
} from "../attribute/validators/index.js";
import { type ElementSpecDefinition } from "../types/index.js";

const empty: [string, AnyAttribute][] = [];

export const elementSpecDefinitionMap: Record<string, ElementSpecDefinition> = {
  html: {
    globalAttributes: true,
    attributes: empty,
  },
  head: { globalAttributes: true, attributes: empty },
  title: { globalAttributes: true, attributes: empty },
  base: {
    globalAttributes: true,
    attributes: [
      ["href", ValidURL.PotentiallySurroundedBySpaces],
      [
        "target",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
    ],
  },
  link: {
    globalAttributes: true,
    attributes: [
      ["href", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "anonymous", "use-credentials"],
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          // allowed: [
          //   "alternate",
          //   "canonical",
          //   "author",
          //   "dns-prefetch",
          //   "expect",
          //   "help",
          //   "icon",
          //   "manifest",
          //   "modulepreload",
          //   "license",
          //   "next",
          //   "pingback",
          //   "preconnect",
          //   "prefetch",
          //   "preload",
          //   "prev",
          //   "privacy-policy",
          //   "search",
          //   "stylesheet",
          //   "terms-of-service",
          // ],
        },
      ],
      ["media", MediaQueryList.Type],
      ["integrity", Text.Type],
      ["hreflang", BCP47.Type],
      ["type", MIMEType.Type],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
          ],
        },
      ],
      [
        "sizes",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          validateToken(value: string) {
            // Accept "any" (case-insensitive)
            if (value.toLowerCase() === "any") {
              return true;
            }

            // Accept dimension pairs: NNNxMMM or NNNxMMM (e.g., "100x200")
            // Must be two non-negative integers without leading zeros, separated by 'x' or 'X'
            const dimensionPattern = /^([1-9]\d*|0)[xX]([1-9]\d*|0)$/;
            const match = value.match(dimensionPattern);

            if (!match) {
              return false;
            }

            // Check that neither number has a leading zero (except for "0" itself)
            const [, width, height] = match;
            if (
              (width.length > 1 && width.startsWith("0")) ||
              (height.length > 1 && height.startsWith("0"))
            ) {
              return false;
            }

            return true;
          },
        },
      ],
      // TODO: conditional - only valid when rel="preload" and as="image"
      ["imagesrcset", SrcsetAttribute.Type],
      // TODO: conditional - only valid when rel="preload", as="image", and imagesrcset is present
      ["imagesizes", SourceSizeList.Type],
      // TODO: conditional - only valid when rel contains "preload" or "modulepreload"
      [
        "as",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "fetch",
            "font",
            "image",
            "script",
            "style",
            "track",
            "json",
            "style",
            "audioworklet",
            "paintworklet",
            "script",
            "serviceworker",
            "sharedworker",
            "worker",
          ],
        },
      ],
      [
        "blocking",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          allowed: ["render"],
        },
      ],
      ["color", CSSColor.Type],
      ["disabled", BooleanAttribute.Type],
      [
        "fetchpriority",
        {
          type: EnumeratedAttribute.type,
          keywords: ["high", "low", "auto"],
        },
      ],
    ],
  },
  meta: {
    globalAttributes: true,
    attributes: [
      ["name", Text.Type],
      [
        "http-equiv",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "content-language",
            "content-type",
            "default-style",
            "refresh",
            "set-cookie",
            "x-ua-compatible",
            "content-security-policy",
          ],
        },
      ],
      ["content", Text.Type],
      [
        "charset",
        {
          type: EnumeratedAttribute.type,
          keywords: ["utf-8"],
        },
      ],
      ["media", MediaQueryList.Type],
    ],
  },
  style: {
    globalAttributes: true,
    attributes: [
      ["media", MediaQueryList.Type],
      [
        "blocking",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          allowed: ["render"],
        },
      ],
    ],
  },
  body: { globalAttributes: true, attributes: empty },
  article: { globalAttributes: true, attributes: empty },
  section: { globalAttributes: true, attributes: empty },
  nav: { globalAttributes: true, attributes: empty },
  aside: { globalAttributes: true, attributes: empty },
  hgroup: { globalAttributes: true, attributes: empty },
  header: { globalAttributes: true, attributes: empty },
  footer: { globalAttributes: true, attributes: empty },
  address: { globalAttributes: true, attributes: empty },
  p: { globalAttributes: true, attributes: empty },
  hr: { globalAttributes: true, attributes: empty },
  pre: { globalAttributes: true, attributes: empty },
  blockquote: {
    globalAttributes: true,
    attributes: [["cite", ValidURL.PotentiallySurroundedBySpaces]],
  },
  ol: {
    globalAttributes: true,
    attributes: [
      ["reversed", BooleanAttribute.Type],
      ["start", SignedInteger.Type],
      [
        "type",
        {
          type: EnumeratedAttribute.type,
          keywords: ["1", "a", "A", "i", "I"],
        },
      ],
    ],
  },
  ul: { globalAttributes: true, attributes: empty },
  menu: { globalAttributes: true, attributes: empty },
  li: {
    globalAttributes: true,
    attributes: [["value", SignedInteger.Type]],
  },
  dl: { globalAttributes: true, attributes: empty },
  dt: { globalAttributes: true, attributes: empty },
  dd: { globalAttributes: true, attributes: empty },
  figure: { globalAttributes: true, attributes: empty },
  figcaption: { globalAttributes: true, attributes: empty },
  main: { globalAttributes: true, attributes: empty },
  search: { globalAttributes: true, attributes: empty },
  div: { globalAttributes: true, attributes: empty },
  a: {
    globalAttributes: true,
    attributes: [
      ["href", ValidURL.PotentiallySurroundedBySpaces],
      [
        "target",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
      ["download", Text.Type],
      [
        "ping",
        {
          type: SpaceSeparatedTokens.type,
          unique: false,
          validateToken(value: string) {
            // URLs of the resources that are interested in being notified if the user follows the hyperlink.
            // Each token must be a valid non-empty URL whose scheme is an HTTP(S) scheme.
            if (value.length === 0) {
              return false;
            }

            try {
              const url = new URL(value);
              // Check if the scheme is http or https
              return url.protocol === "http:" || url.protocol === "https:";
            } catch {
              // Invalid URL format
              return false;
            }
          },
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          allowed: [
            "alternate",
            "author",
            "bookmark",
            "external",
            "help",
            "license",
            "next",
            "nofollow",
            "noopener",
            "noreferrer",
            "opener",
            "prev",
            "privacy-policy",
            "search",
            "tag",
            "terms-of-service",
          ],
        },
      ],
      ["hreflang", BCP47.Type],
      ["type", MIMEType.Type],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
          ],
        },
      ],
    ],
  },
  em: { globalAttributes: true, attributes: empty },
  strong: { globalAttributes: true, attributes: empty },
  small: { globalAttributes: true, attributes: empty },
  s: { globalAttributes: true, attributes: empty },
  cite: { globalAttributes: true, attributes: empty },
  q: {
    globalAttributes: true,
    attributes: [["cite", ValidURL.PotentiallySurroundedBySpaces]],
  },
  dfn: { globalAttributes: true, attributes: empty },
  abbr: { globalAttributes: true, attributes: empty },
  ruby: { globalAttributes: true, attributes: empty },
  rt: { globalAttributes: true, attributes: empty },
  rp: { globalAttributes: true, attributes: empty },
  data: {
    globalAttributes: true,
    attributes: [["value", Text.Type]],
  },
  time: {
    globalAttributes: true,
    attributes: [["datetime", DateString.Type]],
  },
  code: { globalAttributes: true, attributes: empty },
  var: { globalAttributes: true, attributes: empty },
  samp: { globalAttributes: true, attributes: empty },
  kbd: { globalAttributes: true, attributes: empty },
  i: { globalAttributes: true, attributes: empty },
  b: { globalAttributes: true, attributes: empty },
  u: { globalAttributes: true, attributes: empty },
  mark: { globalAttributes: true, attributes: empty },
  bdi: { globalAttributes: true, attributes: empty },
  bdo: { globalAttributes: true, attributes: empty },
  span: { globalAttributes: true, attributes: empty },
  br: { globalAttributes: true, attributes: empty },
  wbr: { globalAttributes: true, attributes: empty },
  ins: {
    globalAttributes: true,
    attributes: [
      ["cite", ValidURL.PotentiallySurroundedBySpaces],
      ["datetime", DateString.Type],
    ],
  },
  del: {
    globalAttributes: true,
    attributes: [
      ["cite", ValidURL.PotentiallySurroundedBySpaces],
      ["datetime", DateString.Type],
    ],
  },
  picture: { globalAttributes: true, attributes: empty },
  source: {
    globalAttributes: true,
    attributes: [
      ["type", MIMEType.Type],
      ["media", MediaQueryList.Type],
      // TODO: conditional - only valid when parent is <audio> or <video> (invalid when parent is <picture>)
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      // TODO: conditional - only valid when parent is <picture> (invalid when parent is <audio> or <video>)
      ["srcset", SrcsetAttribute.Type],
      // TODO: conditional - only valid when parent is <picture> (invalid when parent is <audio> or <video>)
      ["sizes", SourceSizeList.Type],
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
    ],
  },
  img: {
    globalAttributes: true,
    attributes: [
      ["alt", Text.Type],
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      ["srcset", SrcsetAttribute.Type],
      ["sizes", SourceSizeList.Type],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "anonymous", "use-credentials"],
        },
      ],
      // TODO: conditional - invalid when <img> is a descendant of <a> or <button>
      ["usemap", HashNameReference.Type],
      // TODO: conditional - only valid when <img> is a descendant of <a> with href attribute
      ["ismap", BooleanAttribute.Type],
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
          ],
        },
      ],
      [
        "decoding",
        {
          type: EnumeratedAttribute.type,
          keywords: ["sync", "async", "auto"],
        },
      ],
      [
        "loading",
        {
          type: EnumeratedAttribute.type,
          keywords: ["eager", "lazy"],
        },
      ],
      [
        "fetchpriority",
        {
          type: EnumeratedAttribute.type,
          keywords: ["high", "low", "auto"],
        },
      ],
    ],
  },
  iframe: {
    globalAttributes: true,
    attributes: [
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      ["srcdoc", Text.Type],
      [
        "name",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
      [
        "sandbox",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          allowed: [
            "allow-downloads",
            "allow-forms",
            "allow-modals",
            "allow-orientation-lock",
            "allow-pointer-lock",
            "allow-popups",
            "allow-popups-to-escape-sandbox",
            "allow-presentation",
            "allow-same-origin",
            "allow-scripts",
            "allow-top-navigation",
            "allow-top-navigation-by-user-activation",
            "allow-top-navigation-to-custom-protocols",
          ],
        },
      ],
      ["allow", Text.Type],
      ["allowfullscreen", BooleanAttribute.Type],
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
          ],
        },
      ],
      [
        "loading",
        {
          type: EnumeratedAttribute.type,
          keywords: ["eager", "lazy"],
        },
      ],
    ],
  },
  embed: {
    globalAttributes: true,
    attributes: [
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      ["type", MIMEType.Type],
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
    ],
  },
  object: {
    globalAttributes: true,
    attributes: [
      ["data", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      ["type", MIMEType.Type],
      [
        "name",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],

      ["form", ID.Type],
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
    ],
  },
  video: {
    globalAttributes: true,
    attributes: [
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "anonymous", "use-credentials"],
        },
      ],
      ["poster", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "preload",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "none", "metadata", "auto"],
        },
      ],
      ["autoplay", BooleanAttribute.Type],
      ["playsinline", BooleanAttribute.Type],
      ["loop", BooleanAttribute.Type],
      ["muted", BooleanAttribute.Type],
      ["controls", BooleanAttribute.Type],
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
    ],
  },
  audio: {
    globalAttributes: true,
    attributes: [
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "anonymous", "use-credentials"],
        },
      ],
      [
        "preload",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "none", "metadata", "auto"],
        },
      ],
      ["autoplay", BooleanAttribute.Type],
      ["loop", BooleanAttribute.Type],
      ["muted", BooleanAttribute.Type],
      ["controls", BooleanAttribute.Type],
    ],
  },
  track: {
    globalAttributes: true,
    attributes: [
      [
        "kind",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "subtitles",
            "captions",
            "descriptions",
            "chapters",
            "metadata",
          ],
        },
      ],
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      ["srclang", BCP47.Type],
      ["label", Text.Type],
      ["default", BooleanAttribute.Type],
    ],
  },
  map: {
    globalAttributes: true,
    attributes: [["name", Text.Type]],
  },
  area: {
    globalAttributes: true,
    attributes: [
      ["alt", Text.Type],
      [
        "coords",
        {
          type: FloatingPointNumberList.type,
        },
      ],
      [
        "shape",
        {
          type: EnumeratedAttribute.type,
          keywords: ["circle", "default", "poly", "rect"],
        },
      ],
      ["href", ValidURL.PotentiallySurroundedBySpaces],
      // TODO: conditional - only applicable when href attribute is present
      [
        "target",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
      // TODO: conditional - only applicable when href attribute is present
      ["download", Text.Type],
      // TODO: conditional - only applicable when href attribute is present
      [
        "ping",
        {
          type: SpaceSeparatedTokens.type,
          unique: false,
          validateToken(value: string) {
            // URLs of the resources that are interested in being notified if the user follows the hyperlink.
            // Each token must be a valid non-empty URL whose scheme is an HTTP(S) scheme.
            if (value.length === 0) {
              return false;
            }

            try {
              const url = new URL(value);
              // Check if the scheme is http or https
              return url.protocol === "http:" || url.protocol === "https:";
            } catch {
              // Invalid URL format
              return false;
            }
          },
        },
      ],
      // TODO: conditional - only applicable when href attribute is present
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          allowed: [
            "alternate",
            "author",
            "bookmark",
            "external",
            "help",
            "license",
            "next",
            "nofollow",
            "noopener",
            "noreferrer",
            "opener",
            "prev",
            "privacy-policy",
            "search",
            "tag",
            "terms-of-service",
          ],
        },
      ],
      // TODO: conditional - only applicable when href attribute is present
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
          ],
        },
      ],
    ],
  },
  table: { globalAttributes: true, attributes: empty },
  caption: { globalAttributes: true, attributes: empty },
  colgroup: {
    globalAttributes: true,
    attributes: [["span", NonNegativeInteger.GreaterThanZero]],
  },
  col: {
    globalAttributes: true,
    attributes: [["span", NonNegativeInteger.GreaterThanZero]],
  },
  tbody: { globalAttributes: true, attributes: empty },
  thead: { globalAttributes: true, attributes: empty },
  tfoot: { globalAttributes: true, attributes: empty },
  tr: { globalAttributes: true, attributes: empty },
  td: {
    globalAttributes: true,
    attributes: [
      ["colspan", NonNegativeInteger.GreaterThanZero],
      ["rowspan", NonNegativeInteger.Type],
      [
        "headers",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
        },
      ],
    ],
  },
  th: {
    globalAttributes: true,
    attributes: [
      ["colspan", NonNegativeInteger.GreaterThanZero],
      ["rowspan", NonNegativeInteger.Type],
      [
        "headers",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
        },
      ],
      [
        "scope",
        {
          type: EnumeratedAttribute.type,
          keywords: ["row", "col", "rowgroup", "colgroup"],
        },
      ],
      ["abbr", Text.Type],
    ],
  },
  form: {
    globalAttributes: true,
    attributes: [
      [
        "accept-charset",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
        },
      ],
      ["action", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "autocomplete",
        {
          type: EnumeratedAttribute.type,
          keywords: ["on", "off"],
        },
      ],
      [
        "enctype",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/plain",
          ],
        },
      ],
      [
        "method",
        {
          type: EnumeratedAttribute.type,
          keywords: ["get", "post", "dialog"],
        },
      ],
      ["name", Text.Type],
      ["novalidate", BooleanAttribute.Type],
      [
        "target",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
          allowed: [
            "external",
            "help",
            "license",
            "next",
            "nofollow",
            "noopener",
            "noreferrer",
            "opener",
            "prev",
            "search",
          ],
        },
      ],
    ],
  },
  label: {
    globalAttributes: true,
    attributes: [["for", ID.Type]],
  },
  input: {
    globalAttributes: true,
    attributes: [
      // TODO: conditional - only valid when type="file"
      [
        "accept",
        {
          type: CommaSeparatedTokens.type,
        },
      ],
      // TODO: conditional - only valid when type="image"
      ["alt", Text.Type],
      ["autocomplete", AutocompleteAttribute.Type],
      // TODO: conditional - only valid when type="checkbox" or type="radio"
      ["checked", BooleanAttribute.Type],
      ["dirname", Text.Type],
      ["disabled", BooleanAttribute.Type],
      ["form", ID.Type],
      ["formaction", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "formenctype",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/plain",
          ],
        },
      ],
      [
        "formmethod",
        {
          type: EnumeratedAttribute.type,
          keywords: ["get", "post", "dialog"],
        },
      ],
      ["formnovalidate", BooleanAttribute.Type],
      [
        "formtarget",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
      // TODO: conditional - only valid when type="image"
      ["height", NonNegativeInteger.Type],
      ["list", ID.Type],
      // TODO: conditional - allowed value format varies based on type attribute (date, number, range, etc.)
      [
        "max",
        // TODO: varies based on type
        Text.Type,
      ],
      ["maxlength", NonNegativeInteger.Type],
      // TODO: conditional - allowed value format varies based on type attribute (date, number, range, etc.)
      [
        "min",
        // TODO: varies based on type
        Text.Type,
      ],
      ["minlength", NonNegativeInteger.Type],
      // TODO: conditional - only valid when type="file" or type="email"
      ["multiple", BooleanAttribute.Type],
      ["name", Text.Type],
      // TODO: conditional - only applicable to text-based input types (excludes checkbox, radio, hidden, submit, image, reset, button, range, color)
      ["pattern", RegularExpression.Type],
      ["placeholder", Text.Type],
      ["popovertarget", Text.Type],
      [
        "popovertargetaction",
        {
          type: EnumeratedAttribute.type,
          keywords: ["hide", "show", "toggle"],
        },
      ],
      ["readonly", BooleanAttribute.Type],
      ["required", BooleanAttribute.Type],
      ["size", NonNegativeInteger.GreaterThanZero],
      // TODO: conditional - only valid when type="image"
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      // TODO: conditional - only valid when type is one of: date, month, week, time, datetime-local, number, range
      [
        "step",
        {
          type: "#or",
          items: [
            FloatingPointNumber.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["any"],
            },
          ],
        },
      ],
      [
        "type",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "hidden",
            "text",
            "search",
            "tel",
            "url",
            "email",
            "password",
            "date",
            "month",
            "week",
            "time",
            "datetime-local",
            "number",
            "range",
            "color",
            "checkbox",
            "radio",
            "file",
            "submit",
            "image",
            "reset",
            "button",
          ],
        },
      ],
      ["value", Text.Type],
      // TODO: conditional - only valid when type="image"
      ["width", NonNegativeInteger.Type],
    ],
  },
  button: {
    globalAttributes: true,
    attributes: [
      ["disabled", BooleanAttribute.Type],
      ["form", ID.Type],
      // TODO: conditional - only valid when type="submit"
      ["formaction", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      // TODO: conditional - only valid when type="submit"
      [
        "formenctype",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/plain",
          ],
        },
      ],
      // TODO: conditional - only valid when type="submit"
      [
        "formmethod",
        {
          type: EnumeratedAttribute.type,
          keywords: ["get", "post", "dialog"],
        },
      ],
      // TODO: conditional - only valid when type="submit"
      ["formnovalidate", BooleanAttribute.Type],
      // TODO: conditional - only valid when type="submit"
      [
        "formtarget",
        {
          type: "#or",
          items: [
            NavigableTargetName.Type,
            {
              type: EnumeratedAttribute.type,
              keywords: ["_blank", "_self", "_parent", "_top"],
            },
          ],
        },
      ],
      ["name", Text.Type],
      ["popovertarget", Text.Type],
      [
        "popovertargetaction",
        {
          type: EnumeratedAttribute.type,

          keywords: ["hide", "show", "toggle"],
        },
      ],
      [
        "type",
        {
          type: EnumeratedAttribute.type,
          keywords: ["submit", "reset", "button"],
        },
      ],
      ["value", Text.Type],
    ],
  },
  select: {
    globalAttributes: true,
    attributes: [
      ["autocomplete", AutocompleteAttribute.Type],
      ["disabled", BooleanAttribute.Type],
      ["form", ID.Type],
      ["multiple", BooleanAttribute.Type],
      ["name", Text.Type],
      ["required", BooleanAttribute.Type],
      ["size", NonNegativeInteger.GreaterThanZero],
    ],
  },
  datalist: { globalAttributes: true, attributes: empty },
  optgroup: {
    globalAttributes: true,
    attributes: [
      ["disabled", BooleanAttribute.Type],
      ["label", Text.Type],
    ],
  },
  option: {
    globalAttributes: true,
    attributes: [
      ["disabled", BooleanAttribute.Type],
      ["label", Text.Type],
      ["selected", BooleanAttribute.Type],
      ["value", Text.Type],
    ],
  },
  textarea: {
    globalAttributes: true,
    attributes: [
      ["autocomplete", AutocompleteAttribute.Type],
      ["cols", NonNegativeInteger.GreaterThanZero],
      ["dirname", Text.Type],
      ["disabled", BooleanAttribute.Type],
      ["form", ID.Type],
      ["maxlength", NonNegativeInteger.Type],
      ["minlength", NonNegativeInteger.Type],
      ["name", Text.Type],
      ["placeholder", Text.Type],
      ["readonly", BooleanAttribute.Type],
      ["required", BooleanAttribute.Type],
      ["rows", NonNegativeInteger.GreaterThanZero],
      [
        "wrap",
        {
          type: EnumeratedAttribute.type,
          keywords: ["soft", "hard"],
        },
      ],
    ],
  },
  output: {
    globalAttributes: true,
    attributes: [
      [
        "for",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
        },
      ],
      ["form", ID.Type],
      ["name", Text.Type],
    ],
  },
  progress: {
    globalAttributes: true,
    attributes: [
      ["value", FloatingPointNumber.Type],
      ["max", FloatingPointNumber.Type],
    ],
  },
  meter: {
    globalAttributes: true,
    attributes: [
      ["value", FloatingPointNumber.Type],
      ["min", FloatingPointNumber.Type],
      ["max", FloatingPointNumber.Type],
      ["low", FloatingPointNumber.Type],
      ["high", FloatingPointNumber.Type],
      ["optimum", FloatingPointNumber.Type],
    ],
  },
  fieldset: {
    globalAttributes: true,
    attributes: [
      ["disabled", BooleanAttribute.Type],
      ["form", ID.Type],
      ["name", Text.Type],
    ],
  },
  legend: { globalAttributes: true, attributes: empty },
  selectedcontent: { globalAttributes: true, attributes: empty },
  details: {
    globalAttributes: true,
    attributes: [
      ["open", BooleanAttribute.Type],
      ["name", Text.Type],
    ],
  },
  summary: { globalAttributes: true, attributes: empty },
  dialog: {
    globalAttributes: true,
    attributes: [["open", BooleanAttribute.Type]],
  },
  script: {
    globalAttributes: true,
    attributes: [
      ["src", ValidURL.NonEmptyPotentiallySurroundedBySpaces],
      [
        "type",
        {
          type: OrValidator.type,
          items: [
            {
              type: EnumeratedAttribute.type,
              keywords: ["module", "importmap", "speculationrules"],
            },
            MIMEType.Type,
          ],
        },
      ],
      // TODO: conditional - only meaningful for classic scripts (not type="module")
      ["nomodule", BooleanAttribute.Type],
      // TODO: conditional - applicable when src attribute is present or type="module"
      ["async", BooleanAttribute.Type],
      // TODO: conditional - only applicable to classic scripts (not type="module")
      ["defer", BooleanAttribute.Type],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          keywords: ["", "anonymous", "use-credentials"],
        },
      ],
      ["integrity", Text.Type],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          keywords: [
            "",
            "no-referrer",
            "no-referrer-when-downgrade",
            "same-origin",
            "origin",
            "strict-origin",
            "origin-when-cross-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
          ],
        },
      ],
      [
        "blocking",
        {
          type: SpaceSeparatedTokens.type,
          unique: true,
        },
      ],
      [
        "fetchpriority",
        {
          type: EnumeratedAttribute.type,
          keywords: ["high", "low", "auto"],
        },
      ],
    ],
  },
  noscript: { globalAttributes: true, attributes: empty },
  template: {
    globalAttributes: true,
    attributes: [
      [
        "shadowrootmode",
        {
          type: EnumeratedAttribute.type,
          keywords: ["open", "closed"],
        },
      ],
      ["shadowrootdelegatesfocus", BooleanAttribute.Type],
      ["shadowrootclonable", BooleanAttribute.Type],
      ["shadowrootserializable", BooleanAttribute.Type],
    ],
  },
  slot: {
    globalAttributes: true,
    attributes: [["name", Text.Type]],
  },
  canvas: {
    globalAttributes: true,
    attributes: [
      ["width", NonNegativeInteger.Type],
      ["height", NonNegativeInteger.Type],
    ],
  },
};

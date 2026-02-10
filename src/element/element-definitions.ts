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
      [
        "href",
        {
          type: ValidURL.type,
        },
      ],
      [
        "target",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
    ],
  },
  link: {
    globalAttributes: true,
    attributes: [
      [
        "href",
        {
          type: ValidURL.type,
        },
      ],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["", "anonymous", "use-credentials"],
          },
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          options: {
            unique: false,
            allowed: [
              "alternate",
              "canonical",
              "author",
              "dns-prefetch",
              "expect",
              "help",
              "icon",
              "manifest",
              "modulepreload",
              "license",
              "next",
              "pingback",
              "preconnect",
              "prefetch",
              "preload",
              "prev",
              "privacy-policy",
              "search",
              "stylesheet",
              "terms-of-service",
            ],
          },
        },
      ],
      [
        "media",
        {
          type: MediaQueryList.type,
        },
      ],
      [
        "integrity",
        {
          type: Text.type,
        },
      ],
      [
        "hreflang",
        {
          type: BCP47.type,
        },
      ],
      [
        "type",
        {
          type: MIMEType.type,
        },
      ],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          options: {
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
        },
      ],
      [
        "sizes",
        {
          type: SpaceSeparatedTokens.type,
          options: {
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
        },
      ],
      [
        "imagesrcset",
        {
          type: SrcsetAttribute.type,
        },
      ],
      [
        "imagesizes",
        {
          type: SourceSizeList.type,
        },
      ],
      [
        "as",
        {
          type: EnumeratedAttribute.type,
          options: {
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
        },
      ],
      [
        "blocking",
        {
          type: SpaceSeparatedTokens.type,
          options: { unique: true, allowed: ["render"] },
        },
      ],
      [
        "color",
        {
          type: CSSColor.type,
        },
      ],
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "fetchpriority",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["high", "low", "auto"],
          },
        },
      ],
    ],
  },
  meta: {
    globalAttributes: true,
    attributes: [
      [
        "name",
        {
          type: Text.type,
        },
      ],
      [
        "http-equiv",
        {
          type: EnumeratedAttribute.type,
          options: {
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
        },
      ],
      [
        "content",
        {
          type: Text.type,
        },
      ],
      [
        "charset",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["utf-8"],
          },
        },
      ],
      [
        "media",
        {
          type: MediaQueryList.type,
        },
      ],
    ],
  },
  style: {
    globalAttributes: true,
    attributes: [
      [
        "media",
        {
          type: MediaQueryList.type,
        },
      ],
      [
        "blocking",
        {
          type: SpaceSeparatedTokens.type,
          options: { unique: true, allowed: ["render"] },
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
    attributes: [
      [
        "cite",
        {
          type: ValidURL.type,
        },
      ],
    ],
  },
  ol: {
    globalAttributes: true,
    attributes: [
      [
        "reversed",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "start",
        {
          type: SignedInteger.type,
        },
      ],
      [
        "type",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["1", "a", "A", "i", "I"],
          },
        },
      ],
    ],
  },
  ul: { globalAttributes: true, attributes: empty },
  menu: { globalAttributes: true, attributes: empty },
  li: {
    globalAttributes: true,
    attributes: [
      [
        "value",
        {
          type: SignedInteger.type,
        },
      ],
    ],
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
      [
        "href",
        {
          type: ValidURL.type,
        },
      ],
      [
        "target",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
      [
        "download",
        {
          type: Text.type,
        },
      ],
      [
        "ping",
        {
          type: SpaceSeparatedTokens.type,
          options: {
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
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          options: {
            unique: false,
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
        },
      ],
      [
        "hreflang",
        {
          type: BCP47.type,
        },
      ],
      [
        "type",
        {
          type: MIMEType.type,
        },
      ],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
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
    attributes: [
      [
        "cite",
        {
          type: ValidURL.type,
        },
      ],
    ],
  },
  dfn: { globalAttributes: true, attributes: empty },
  abbr: { globalAttributes: true, attributes: empty },
  ruby: { globalAttributes: true, attributes: empty },
  rt: { globalAttributes: true, attributes: empty },
  rp: { globalAttributes: true, attributes: empty },
  data: {
    globalAttributes: true,
    attributes: [
      [
        "value",
        {
          type: Text.type,
        },
      ],
    ],
  },
  time: {
    globalAttributes: true,
    attributes: [
      [
        "datetime",
        {
          type: DateString.type,
        },
      ],
    ],
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
      [
        "cite",
        {
          type: ValidURL.type,
        },
      ],
      [
        "datetime",
        {
          type: DateString.type,
        },
      ],
    ],
  },
  del: {
    globalAttributes: true,
    attributes: [
      [
        "cite",
        {
          type: ValidURL.type,
        },
      ],
      [
        "datetime",
        {
          type: DateString.type,
        },
      ],
    ],
  },
  picture: { globalAttributes: true, attributes: empty },
  source: {
    globalAttributes: true,
    attributes: [
      [
        "type",
        {
          type: MIMEType.type,
        },
      ],
      [
        "media",
        {
          type: MediaQueryList.type,
        },
      ],
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "srcset",
        {
          type: SrcsetAttribute.type,
        },
      ],
      [
        "sizes",
        {
          type: SourceSizeList.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
    ],
  },
  img: {
    globalAttributes: true,
    attributes: [
      [
        "alt",
        {
          type: Text.type,
        },
      ],
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "srcset",
        {
          type: SrcsetAttribute.type,
        },
      ],
      [
        "sizes",
        {
          type: SourceSizeList.type,
        },
      ],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["anonymous", "use-credentials"],
          },
        },
      ],
      [
        "usemap",
        {
          type: HashNameReference.type,
        },
      ],
      [
        "ismap",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
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
        },
      ],
      [
        "decoding",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["sync", "async", "auto"],
          },
        },
      ],
      [
        "loading",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["eager", "lazy"],
          },
        },
      ],
      [
        "fetchpriority",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["high", "low", "auto"],
          },
        },
      ],
    ],
  },
  iframe: {
    globalAttributes: true,
    attributes: [
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "srcdoc",
        {
          type: Text.type,
        },
      ],
      [
        "name",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
      [
        "sandbox",
        {
          type: SpaceSeparatedTokens.type,
          options: {
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
        },
      ],
      [
        "allow",
        {
          type: Text.type,
        },
      ],
      [
        "allowfullscreen",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
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
        },
      ],
      [
        "loading",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["eager", "lazy"],
          },
        },
      ],
    ],
  },
  embed: {
    globalAttributes: true,
    attributes: [
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "type",
        {
          type: MIMEType.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
    ],
  },
  object: {
    globalAttributes: true,
    attributes: [
      [
        "data",
        {
          type: ValidURL.type,
        },
      ],
      [
        "type",
        {
          type: MIMEType.type,
        },
      ],
      [
        "name",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],

      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
    ],
  },
  video: {
    globalAttributes: true,
    attributes: [
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["anonymous", "use-credentials"],
          },
        },
      ],
      [
        "poster",
        {
          type: ValidURL.type,
        },
      ],
      [
        "preload",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["none", "metadata", "auto"],
          },
        },
      ],
      [
        "autoplay",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "playsinline",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "loop",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "muted",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "controls",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
    ],
  },
  audio: {
    globalAttributes: true,
    attributes: [
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["anonymous", "use-credentials"],
          },
        },
      ],
      [
        "preload",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["none", "metadata", "auto"],
          },
        },
      ],
      [
        "autoplay",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "loop",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "muted",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "controls",
        {
          type: BooleanAttribute.type,
        },
      ],
    ],
  },
  track: {
    globalAttributes: true,
    attributes: [
      [
        "kind",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
              "subtitles",
              "captions",
              "descriptions",
              "chapters",
              "metadata",
            ],
          },
        },
      ],
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "srclang",
        {
          type: BCP47.type,
        },
      ],
      [
        "label",
        {
          type: Text.type,
        },
      ],
      [
        "default",
        {
          type: BooleanAttribute.type,
        },
      ],
    ],
  },
  map: {
    globalAttributes: true,
    attributes: [
      [
        "name",
        {
          type: Text.type,
        },
      ],
    ],
  },
  area: {
    globalAttributes: true,
    attributes: [
      [
        "alt",
        {
          type: Text.type,
        },
      ],
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
          options: {
            keywords: ["circle", "default", "poly", "rect"],
          },
        },
      ],
      [
        "href",
        {
          type: ValidURL.type,
        },
      ],
      [
        "target",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
      [
        "download",
        {
          type: Text.type,
        },
      ],
      [
        "ping",
        {
          type: SpaceSeparatedTokens.type,
          options: {
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
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          options: {
            unique: false,
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
        },
      ],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
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
        },
      ],
    ],
  },
  table: { globalAttributes: true, attributes: empty },
  caption: { globalAttributes: true, attributes: empty },
  colgroup: {
    globalAttributes: true,
    attributes: [
      [
        "span",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
    ],
  },
  col: {
    globalAttributes: true,
    attributes: [
      [
        "span",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
    ],
  },
  tbody: { globalAttributes: true, attributes: empty },
  thead: { globalAttributes: true, attributes: empty },
  tfoot: { globalAttributes: true, attributes: empty },
  tr: { globalAttributes: true, attributes: empty },
  td: {
    globalAttributes: true,
    attributes: [
      [
        "colspan",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
      [
        "rowspan",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "headers",
        {
          type: SpaceSeparatedTokens.type,
          options: { unique: true },
        },
      ],
    ],
  },
  th: {
    globalAttributes: true,
    attributes: [
      [
        "colspan",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
      [
        "rowspan",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "headers",
        {
          type: SpaceSeparatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "scope",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["row", "col", "rowgroup", "colgroup"],
          },
        },
      ],
      [
        "abbr",
        {
          type: Text.type,
        },
      ],
    ],
  },
  form: {
    globalAttributes: true,
    attributes: [
      [
        "accept-charset",
        {
          type: SpaceSeparatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "action",
        {
          type: ValidURL.type,
        },
      ],
      [
        "autocomplete",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["on", "off"],
          },
        },
      ],
      [
        "enctype",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
              "application/x-www-form-urlencoded",
              "multipart/form-data",
              "text/plain",
            ],
          },
        },
      ],
      [
        "method",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["get", "post", "dialog"],
          },
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
      [
        "novalidate",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "target",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
      [
        "rel",
        {
          type: SpaceSeparatedTokens.type,
          options: {
            unique: false,
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
        },
      ],
    ],
  },
  label: {
    globalAttributes: true,
    attributes: [
      [
        "for",
        {
          type: ID.type,
        },
      ],
    ],
  },
  input: {
    globalAttributes: true,
    attributes: [
      [
        "accept",
        {
          type: CommaSeparatedTokens.type,
        },
      ],
      [
        "alt",
        {
          type: Text.type,
        },
      ],
      [
        "autocomplete",
        {
          type: AutocompleteAttribute.type,
        },
      ],
      [
        "checked",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "dirname",
        {
          type: Text.type,
        },
      ],
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "formaction",
        {
          type: ValidURL.type,
        },
      ],
      [
        "formenctype",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
              "application/x-www-form-urlencoded",
              "multipart/form-data",
              "text/plain",
            ],
          },
        },
      ],
      [
        "formmethod",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["get", "post", "dialog"],
          },
        },
      ],
      [
        "formnovalidate",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "formtarget",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "list",
        {
          type: ID.type,
        },
      ],
      [
        "max",
        {
          // TODO: varies based on type
          type: Text.type,
        },
      ],
      [
        "maxlength",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "min",
        {
          // TODO: varies based on type
          type: Text.type,
        },
      ],
      [
        "minlength",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "multiple",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
      [
        "pattern",
        {
          type: RegularExpression.type,
        },
      ],
      [
        "placeholder",
        {
          type: Text.type,
        },
      ],
      [
        "popovertarget",
        {
          type: Text.type,
        },
      ],
      [
        "popovertargetaction",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["hide", "show", "toggle"],
          },
        },
      ],
      [
        "readonly",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "required",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "size",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "step",
        {
          type: "#or",
          items: [
            {
              type: FloatingPointNumber.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["any"],
              },
            },
          ],
        },
      ],
      [
        "type",
        {
          type: EnumeratedAttribute.type,
          options: {
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
        },
      ],
      [
        "value",
        {
          type: Text.type,
        },
      ],
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
    ],
  },
  button: {
    globalAttributes: true,
    attributes: [
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "formaction",
        {
          type: ValidURL.type,
        },
      ],
      [
        "formenctype",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
              "application/x-www-form-urlencoded",
              "multipart/form-data",
              "text/plain",
            ],
          },
        },
      ],
      [
        "formmethod",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["get", "post", "dialog"],
          },
        },
      ],
      [
        "formnovalidate",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "formtarget",
        {
          type: "#or",
          items: [
            {
              type: NavigableTargetName.type,
            },
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["_blank", "_self", "_parent", "_top"],
              },
            },
          ],
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
      [
        "popovertarget",
        {
          type: Text.type,
        },
      ],
      [
        "popovertargetaction",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["hide", "show", "toggle"],
          },
        },
      ],
      [
        "type",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["submit", "reset", "button"],
          },
        },
      ],
      [
        "value",
        {
          type: Text.type,
        },
      ],
    ],
  },
  select: {
    globalAttributes: true,
    attributes: [
      [
        "autocomplete",
        {
          type: AutocompleteAttribute.type,
        },
      ],
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "multiple",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
      [
        "required",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "size",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
    ],
  },
  datalist: { globalAttributes: true, attributes: empty },
  optgroup: {
    globalAttributes: true,
    attributes: [
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "label",
        {
          type: Text.type,
        },
      ],
    ],
  },
  option: {
    globalAttributes: true,
    attributes: [
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "label",
        {
          type: Text.type,
        },
      ],
      [
        "selected",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "value",
        {
          type: Text.type,
        },
      ],
    ],
  },
  textarea: {
    globalAttributes: true,
    attributes: [
      [
        "autocomplete",
        {
          type: AutocompleteAttribute.type,
        },
      ],
      [
        "cols",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
      [
        "dirname",
        {
          type: Text.type,
        },
      ],
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "maxlength",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "minlength",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
      [
        "placeholder",
        {
          type: Text.type,
        },
      ],
      [
        "readonly",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "required",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "rows",
        {
          type: NonNegativeInteger.type,
          options: {
            min: 1,
          },
        },
      ],
      [
        "wrap",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["soft", "hard"],
          },
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
          options: { unique: true },
        },
      ],
      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
    ],
  },
  progress: {
    globalAttributes: true,
    attributes: [
      [
        "value",
        {
          type: FloatingPointNumber.type,
        },
      ],
      [
        "max",
        {
          type: FloatingPointNumber.type,
        },
      ],
    ],
  },
  meter: {
    globalAttributes: true,
    attributes: [
      [
        "value",
        {
          type: FloatingPointNumber.type,
        },
      ],
      [
        "min",
        {
          type: FloatingPointNumber.type,
        },
      ],
      [
        "max",
        {
          type: FloatingPointNumber.type,
        },
      ],
      [
        "low",
        {
          type: FloatingPointNumber.type,
        },
      ],
      [
        "high",
        {
          type: FloatingPointNumber.type,
        },
      ],
      [
        "optimum",
        {
          type: FloatingPointNumber.type,
        },
      ],
    ],
  },
  fieldset: {
    globalAttributes: true,
    attributes: [
      [
        "disabled",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "form",
        {
          type: ID.type,
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
    ],
  },
  legend: { globalAttributes: true, attributes: empty },
  selectedcontent: { globalAttributes: true, attributes: empty },
  details: {
    globalAttributes: true,
    attributes: [
      [
        "open",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "name",
        {
          type: Text.type,
        },
      ],
    ],
  },
  summary: { globalAttributes: true, attributes: empty },
  dialog: {
    globalAttributes: true,
    attributes: [
      [
        "open",
        {
          type: BooleanAttribute.type,
        },
      ],
    ],
  },
  script: {
    globalAttributes: true,
    attributes: [
      [
        "src",
        {
          type: ValidURL.type,
        },
      ],
      [
        "type",
        {
          type: OrValidator.type,
          items: [
            {
              type: EnumeratedAttribute.type,
              options: {
                keywords: ["module", "importmap", "speculationrules"],
              },
            },
            {
              type: MIMEType.type,
            },
          ],
        },
      ],
      [
        "nomodule",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "async",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "defer",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "crossorigin",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["anonymous", "use-credentials"],
          },
        },
      ],
      [
        "integrity",
        {
          type: Text.type,
        },
      ],
      [
        "referrerpolicy",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: [
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
        },
      ],
      [
        "blocking",
        {
          type: SpaceSeparatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "fetchpriority",
        {
          type: EnumeratedAttribute.type,
          options: {
            keywords: ["high", "low", "auto"],
          },
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
          options: {
            keywords: ["open", "closed"],
          },
        },
      ],
      [
        "shadowrootdelegatesfocus",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "shadowrootclonable",
        {
          type: BooleanAttribute.type,
        },
      ],
      [
        "shadowrootserializable",
        {
          type: BooleanAttribute.type,
        },
      ],
    ],
  },
  slot: {
    globalAttributes: true,
    attributes: [
      [
        "name",
        {
          type: Text.type,
        },
      ],
    ],
  },
  canvas: {
    globalAttributes: true,
    attributes: [
      [
        "width",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
      [
        "height",
        {
          type: NonNegativeInteger.type,
          options: {},
        },
      ],
    ],
  },
};

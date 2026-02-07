import { IMPLICIT_ROLE } from "./accessibility/implicit-role";
import {
  BooleanAttribute,
  EnumeratedAttribute,
  SignedInteger,
  SpaceSeperatedTokens,
  Text,
  ValidURL,
} from "./attributes";
import { AnyAttribute } from "./attributes/any-attribute";
import { ElementSpec } from "./types";

const empty: [string, AnyAttribute][] = [];

export const elements: Record<string, ElementSpec> = {
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
          // TODO: valid browsing context name or keyword
          type: Text.type,
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
            keywords: ["anonymous", "use-credentials"],
          },
        },
      ],
      [
        "rel",
        {
          // TODO: set of space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: false },
        },
      ],
      [
        "media",
        {
          // TODO: valid media query list
          type: Text.type,
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
          // TODO: valid BCP 47 language tag
          type: Text.type,
        },
      ],
      [
        "type",
        {
          // TODO: valid MIME type string
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
        "sizes",
        {
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "imagesrcset",
        {
          // TODO: comma-separated list of image candidate strings
          type: Text.type,
        },
      ],
      [
        "imagesizes",
        {
          // TODO: valid source size list
          type: Text.type,
        },
      ],
      [
        "as",
        {
          // TODO: potential destination
          type: Text.type,
        },
      ],
      [
        "blocking",
        {
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "color",
        {
          // TODO: CSS <color>
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
          // TODO: encoding label
          type: Text.type,
        },
      ],
      [
        "media",
        {
          // TODO: valid media query list
          type: Text.type,
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
          // TODO: valid media query list
          type: Text.type,
        },
      ],
      [
        "blocking",
        {
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: true },
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
          // TODO: valid browsing context name or keyword
          type: Text.type,
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
          // TODO: set of space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: false },
        },
      ],
      [
        "rel",
        {
          // TODO: set of space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: false },
        },
      ],
      [
        "hreflang",
        {
          // TODO: valid BCP 47 language tag
          type: Text.type,
        },
      ],
      [
        "type",
        {
          // TODO: valid MIME type string
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
          // TODO: valid datetime value
          type: Text.type,
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
          // TODO: valid datetime value
          type: Text.type,
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
          // TODO: valid datetime value
          type: Text.type,
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
          // TODO: valid MIME type string
          type: Text.type,
        },
      ],
      [
        "media",
        {
          // TODO: valid media query list
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
          // TODO: comma-separated list of image candidate strings
          type: Text.type,
        },
      ],
      [
        "sizes",
        {
          // TODO: valid source size list
          type: Text.type,
        },
      ],
      [
        "width",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: comma-separated list of image candidate strings
          type: Text.type,
        },
      ],
      [
        "sizes",
        {
          // TODO: valid source size list
          type: Text.type,
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
          // TODO: valid hash-name reference to a <map> element
          type: Text.type,
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
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
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
          // TODO: valid browsing context name
          type: Text.type,
        },
      ],
      [
        "sandbox",
        {
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "allow",
        {
          // TODO: permissions policy
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
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
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
          // TODO: valid MIME type string
          type: Text.type,
        },
      ],
      [
        "width",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: valid MIME type string
          type: Text.type,
        },
      ],
      [
        "name",
        {
          // TODO: valid browsing context name
          type: Text.type,
        },
      ],
      [
        "usemap",
        {
          // TODO: valid hash-name reference to a <map> element
          type: Text.type,
        },
      ],
      [
        "form",
        {
          // TODO: ID of a form element
          type: Text.type,
        },
      ],
      [
        "width",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: valid BCP 47 language tag
          type: Text.type,
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
          // TODO: valid list of integers
          type: Text.type,
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
          // TODO: valid browsing context name or keyword
          type: Text.type,
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
          // TODO: set of space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: false },
        },
      ],
      [
        "rel",
        {
          // TODO: set of space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: false },
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
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
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
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
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
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
        },
      ],
      [
        "rowspan",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "headers",
        {
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
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
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
        },
      ],
      [
        "rowspan",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "headers",
        {
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
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
          // TODO: ordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
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
          // TODO: valid browsing context name or keyword
          type: Text.type,
        },
      ],
      [
        "rel",
        {
          // TODO: set of space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: false },
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
          // TODO: ID of a labelable element
          type: Text.type,
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
          // TODO: set of comma-separated tokens
          type: Text.type,
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
          // TODO: autofill field name
          type: Text.type,
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
          // TODO: ID of a form element
          type: Text.type,
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
          // TODO: valid browsing context name or keyword
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "list",
        {
          // TODO: ID of a datalist element
          type: Text.type,
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
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: valid regular expression
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
          // TODO: valid non-negative integer greater than zero
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
        "step",
        {
          // TODO: valid floating-point number or "any"
          type: Text.type,
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
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: ID of a form element
          type: Text.type,
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
          // TODO: valid browsing context name or keyword
          type: Text.type,
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
          // TODO: autofill field name
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
          // TODO: ID of a form element
          type: Text.type,
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
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
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
          // TODO: autofill field name
          type: Text.type,
        },
      ],
      [
        "cols",
        {
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
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
          // TODO: ID of a form element
          type: Text.type,
        },
      ],
      [
        "maxlength",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "minlength",
        {
          // TODO: valid non-negative integer
          type: Text.type,
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
          // TODO: valid non-negative integer greater than zero
          type: Text.type,
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
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
          options: { unique: true },
        },
      ],
      [
        "form",
        {
          // TODO: ID of a form element
          type: Text.type,
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
          // TODO: valid floating-point number
          type: Text.type,
        },
      ],
      [
        "max",
        {
          // TODO: valid floating-point number
          type: Text.type,
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
          // TODO: valid floating-point number
          type: Text.type,
        },
      ],
      [
        "min",
        {
          // TODO: valid floating-point number
          type: Text.type,
        },
      ],
      [
        "max",
        {
          // TODO: valid floating-point number
          type: Text.type,
        },
      ],
      [
        "low",
        {
          // TODO: valid floating-point number
          type: Text.type,
        },
      ],
      [
        "high",
        {
          // TODO: valid floating-point number
          type: Text.type,
        },
      ],
      [
        "optimum",
        {
          // TODO: valid floating-point number
          type: Text.type,
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
          // TODO: ID of a form element
          type: Text.type,
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
          // TODO: valid MIME type string
          type: Text.type,
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
          // TODO: unordered set of unique space-separated tokens
          type: SpaceSeperatedTokens.type,
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
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
      [
        "height",
        {
          // TODO: valid non-negative integer
          type: Text.type,
        },
      ],
    ],
  },
};

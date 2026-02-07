import { ARIA_ROLES } from "./constants";
import { ElementSpec } from "./types";

export const elements: Record<string, ElementSpec> = {
  html: {
    implicitRole: () => ARIA_ROLES.DOCUMENT,
  },
  head: {
    implicitRole: () => null,
  },
  title: {
    implicitRole: () => null,
  },
  base: {
    implicitRole: () => null,
  },
  link: {
    implicitRole: () => null,
  },
  meta: {
    implicitRole: () => null,
  },
  style: {
    implicitRole: () => null,
  },
  body: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  article: {
    implicitRole: () => ARIA_ROLES.ARTICLE,
  },
  section: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  nav: {
    implicitRole: () => ARIA_ROLES.NAVIGATION,
  },
  aside: {
    implicitRole: () => ARIA_ROLES.COMPLEMENTARY,
  },
  hgroup: {
    implicitRole: () => ARIA_ROLES.GROUP,
  },
  header: {
    implicitRole: () => null,
  },
  footer: {
    implicitRole: () => null,
  },
  address: {
    implicitRole: () => ARIA_ROLES.GROUP,
  },
  p: {
    implicitRole: () => ARIA_ROLES.PARAGRAPH,
  },
  hr: {
    implicitRole: () => ARIA_ROLES.SEPARATOR,
  },
  pre: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  blockquote: {
    implicitRole: () => ARIA_ROLES.BLOCKQUOTE,
  },
  ol: {
    implicitRole: () => ARIA_ROLES.LIST,
  },
  ul: {
    implicitRole: () => ARIA_ROLES.LIST,
  },
  menu: {
    implicitRole: () => ARIA_ROLES.LIST,
  },
  li: {
    implicitRole: () => null,
  },
  dl: {
    implicitRole: () => null,
  },
  dt: {
    implicitRole: () => ARIA_ROLES.TERM,
  },
  dd: {
    implicitRole: () => null,
  },
  figure: {
    implicitRole: () => ARIA_ROLES.FIGURE,
  },
  figcaption: {
    implicitRole: () => null,
  },
  main: {
    implicitRole: () => ARIA_ROLES.MAIN,
  },
  search: {
    implicitRole: () => ARIA_ROLES.SEARCH,
  },
  div: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  a: {
    implicitRole: (element) =>
      element.attributes.has("href") ? ARIA_ROLES.LINK : ARIA_ROLES.GENERIC,
  },
  em: {
    implicitRole: () => ARIA_ROLES.EMPHASIS,
  },
  strong: {
    implicitRole: () => ARIA_ROLES.STRONG,
  },
  small: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  s: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  cite: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  q: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  dfn: {
    implicitRole: () => ARIA_ROLES.TERM,
  },
  abbr: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  ruby: {
    implicitRole: () => null,
  },
  rt: {
    implicitRole: () => null,
  },
  rp: {
    implicitRole: () => null,
  },
  data: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  time: {
    implicitRole: () => ARIA_ROLES.TIME,
  },
  code: {
    implicitRole: () => ARIA_ROLES.CODE,
  },
  var: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  samp: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  kbd: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  i: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  b: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  u: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  mark: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  bdi: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  bdo: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  span: {
    implicitRole: () => ARIA_ROLES.GENERIC,
  },
  br: {
    implicitRole: () => null,
  },
  wbr: {
    implicitRole: () => null,
  },
  ins: {
    implicitRole: () => ARIA_ROLES.INSERTION,
  },
  del: {
    implicitRole: () => ARIA_ROLES.DELETION,
  },
  picture: {
    implicitRole: () => null,
  },
  source: {
    implicitRole: () => null,
  },
  img: {
    implicitRole: (element) =>
      element.attributes.get("alt") === "" ? null : ARIA_ROLES.IMG,
  },
  iframe: {
    implicitRole: () => null,
  },
  embed: {
    implicitRole: () => null,
  },
  object: {
    implicitRole: () => null,
  },
  video: {
    implicitRole: () => null,
  },
  audio: {
    implicitRole: () => null,
  },
  track: {
    implicitRole: () => null,
  },
  map: {
    implicitRole: () => null,
  },
  area: {
    implicitRole: (element) =>
      element.attributes.has("href") ? ARIA_ROLES.LINK : ARIA_ROLES.GENERIC,
  },
  table: {
    implicitRole: () => ARIA_ROLES.TABLE,
  },
  caption: {
    implicitRole: () => ARIA_ROLES.CAPTION,
  },
  colgroup: {
    implicitRole: () => null,
  },
  col: {
    implicitRole: () => null,
  },
  tbody: {
    implicitRole: () => ARIA_ROLES.ROWGROUP,
  },
  thead: {
    implicitRole: () => ARIA_ROLES.ROWGROUP,
  },
  tfoot: {
    implicitRole: () => ARIA_ROLES.ROWGROUP,
  },
  tr: {
    implicitRole: () => ARIA_ROLES.ROW,
  },
  td: {
    implicitRole: () => ARIA_ROLES.CELL,
  },
  th: {
    implicitRole: () => null,
  },
  form: {
    implicitRole: () => ARIA_ROLES.FORM,
  },
  label: {
    implicitRole: () => null,
  },
  input: {
    implicitRole: (element) => {
      const type = element.attributes.get("type") || "text";
      switch (type) {
        case "button":
          return ARIA_ROLES.BUTTON;
        case "checkbox":
          return ARIA_ROLES.CHECKBOX;
        case "email":
          return ARIA_ROLES.TEXTBOX;
        case "image":
          return ARIA_ROLES.BUTTON;
        case "number":
          return ARIA_ROLES.SPINBUTTON;
        case "radio":
          return ARIA_ROLES.RADIO;
        case "range":
          return ARIA_ROLES.SLIDER;
        case "reset":
          return ARIA_ROLES.BUTTON;
        case "search":
          return ARIA_ROLES.SEARCHBOX;
        case "submit":
          return ARIA_ROLES.BUTTON;
        case "tel":
          return ARIA_ROLES.TEXTBOX;
        case "text":
          return ARIA_ROLES.TEXTBOX;
        case "url":
          return ARIA_ROLES.TEXTBOX;
        default:
          return ARIA_ROLES.TEXTBOX;
      }
    },
  },
  button: {
    implicitRole: () => ARIA_ROLES.BUTTON,
  },
  select: {
    implicitRole: (element) =>
      element.attributes.has("multiple") ||
      Number(element.attributes.get("size")) > 1
        ? ARIA_ROLES.LISTBOX
        : ARIA_ROLES.COMBOBOX,
  },
  datalist: {
    implicitRole: () => ARIA_ROLES.LISTBOX,
  },
  optgroup: {
    implicitRole: () => ARIA_ROLES.GROUP,
  },
  option: {
    implicitRole: () => ARIA_ROLES.OPTION,
  },
  textarea: {
    implicitRole: () => ARIA_ROLES.TEXTBOX,
  },
  output: {
    implicitRole: () => ARIA_ROLES.STATUS,
  },
  progress: {
    implicitRole: () => ARIA_ROLES.PROGRESSBAR,
  },
  meter: {
    implicitRole: () => ARIA_ROLES.METER,
  },
  fieldset: {
    implicitRole: () => ARIA_ROLES.GROUP,
  },
  legend: {
    implicitRole: () => null,
  },
  selectedcontent: {
    implicitRole: () => null,
  },
  details: {
    implicitRole: () => ARIA_ROLES.GROUP,
  },
  summary: {
    implicitRole: () => ARIA_ROLES.BUTTON,
  },
  dialog: {
    implicitRole: () => ARIA_ROLES.DIALOG,
  },
  script: {
    implicitRole: () => null,
  },
  noscript: {
    implicitRole: () => null,
  },
  template: {
    implicitRole: () => null,
  },
  slot: {
    implicitRole: () => null,
  },
  canvas: {
    implicitRole: () => null,
  },
};

import { ARIA_ROLES } from "./aria-roles.js";
import { ElementState } from "../element/element-state.js";

/**
 * https://www.w3.org/TR/html-aria/
 */
export const IMPLICIT_ROLE: Record<
  string,
  (element: ElementState) => string | null
> = {
  a: (element) =>
    element.attributes.has("href") ? ARIA_ROLES.LINK : ARIA_ROLES.GENERIC,
  abbr: () => null,
  address: () => ARIA_ROLES.GROUP,
  area: (element) =>
    element.attributes.has("href") ? ARIA_ROLES.LINK : ARIA_ROLES.GENERIC,
  article: () => ARIA_ROLES.ARTICLE,
  aside: () => ARIA_ROLES.COMPLEMENTARY,
  audio: () => null,
  b: () => ARIA_ROLES.GENERIC,
  base: () => null,
  bdi: () => ARIA_ROLES.GENERIC,
  bdo: () => ARIA_ROLES.GENERIC,
  blockquote: () => ARIA_ROLES.BLOCKQUOTE,
  body: () => ARIA_ROLES.GENERIC,
  br: () => null,
  button: () => ARIA_ROLES.BUTTON,
  canvas: () => null,
  caption: () => ARIA_ROLES.CAPTION,
  cite: () => null,
  code: () => ARIA_ROLES.CODE,
  col: () => null,
  colgroup: () => null,
  data: () => ARIA_ROLES.GENERIC,
  datalist: () => ARIA_ROLES.LISTBOX,
  dd: () => null,
  del: () => ARIA_ROLES.DELETION,
  details: () => ARIA_ROLES.GROUP,
  dfn: () => ARIA_ROLES.TERM,
  dialog: () => ARIA_ROLES.DIALOG,
  div: () => ARIA_ROLES.GENERIC,
  dl: () => null,
  dt: () => null,
  em: () => ARIA_ROLES.EMPHASIS,
  embed: () => null,
  fieldset: () => ARIA_ROLES.GROUP,
  figcaption: () => null,
  figure: () => ARIA_ROLES.FIGURE,
  footer: (element) => {
    const sectioningElements = ["article", "aside", "main", "nav", "section"];
    for (const ancestor of element.ancestors()) {
      if (sectioningElements.includes(ancestor.name.toLowerCase())) {
        return ARIA_ROLES.GENERIC;
      }
    }
    return ARIA_ROLES.CONTENTINFO;
  },
  form: () => ARIA_ROLES.FORM,
  h1: () => ARIA_ROLES.HEADING,
  h2: () => ARIA_ROLES.HEADING,
  h3: () => ARIA_ROLES.HEADING,
  h4: () => ARIA_ROLES.HEADING,
  h5: () => ARIA_ROLES.HEADING,
  h6: () => ARIA_ROLES.HEADING,
  head: () => null,
  header: () => null, // TODO: banner if not descendant of article/aside/main/nav/section, otherwise generic
  hgroup: () => ARIA_ROLES.GROUP,
  hr: () => ARIA_ROLES.SEPARATOR,
  html: () => ARIA_ROLES.DOCUMENT,
  i: () => ARIA_ROLES.GENERIC,
  iframe: () => null,
  img: (element) => {
    const alt = element.attributes.get("alt");
    if (alt === "") return null;
    return ARIA_ROLES.IMG;
  },
  input: (element) => {
    const type = element.attributes.get("type") || "text";
    switch (type) {
      case "button":
      case "image":
      case "reset":
      case "submit":
        return ARIA_ROLES.BUTTON;
      case "checkbox":
        return ARIA_ROLES.CHECKBOX;
      case "color":
      case "date":
      case "datetime-local":
      case "file":
      case "hidden":
      case "month":
      case "password":
      case "time":
      case "week":
        return null;
      case "email":
      case "tel":
      case "text":
      case "url":
        return ARIA_ROLES.TEXTBOX;
      case "number":
        return ARIA_ROLES.SPINBUTTON;
      case "radio":
        return ARIA_ROLES.RADIO;
      case "range":
        return ARIA_ROLES.SLIDER;
      case "search":
        return ARIA_ROLES.SEARCHBOX;
      default:
        return ARIA_ROLES.TEXTBOX;
    }
  },
  ins: () => ARIA_ROLES.INSERTION,
  kbd: () => null,
  label: () => null,
  legend: () => null,
  li: () => null, // TODO: listitem if child of ol/ul/menu, otherwise generic
  link: () => null,
  main: () => ARIA_ROLES.MAIN,
  map: () => null,
  mark: () => null,
  menu: () => ARIA_ROLES.LIST,
  meta: () => null,
  meter: () => ARIA_ROLES.METER,
  nav: () => ARIA_ROLES.NAVIGATION,
  noscript: () => null,
  object: () => null,
  ol: () => ARIA_ROLES.LIST,
  optgroup: () => ARIA_ROLES.GROUP,
  option: () => ARIA_ROLES.OPTION,
  output: () => ARIA_ROLES.STATUS,
  p: () => ARIA_ROLES.PARAGRAPH,
  param: () => null,
  picture: () => null,
  pre: () => ARIA_ROLES.GENERIC,
  progress: () => ARIA_ROLES.PROGRESSBAR,
  q: () => ARIA_ROLES.GENERIC,
  rp: () => null,
  rt: () => null,
  ruby: () => null,
  s: () => ARIA_ROLES.DELETION,
  samp: () => ARIA_ROLES.GENERIC,
  script: () => null,
  search: () => ARIA_ROLES.SEARCH,
  section: () => null,
  select: (element) =>
    element.attributes.has("multiple")
      ? ARIA_ROLES.LISTBOX
      : ARIA_ROLES.COMBOBOX,
  slot: () => null,
  small: () => ARIA_ROLES.GENERIC,
  span: () => ARIA_ROLES.GENERIC,
  strong: () => ARIA_ROLES.STRONG,
  style: () => null,
  sub: () => null,
  summary: () => ARIA_ROLES.BUTTON,
  sup: () => null,
  svg: () => null,
  table: () => ARIA_ROLES.TABLE,
  tbody: () => ARIA_ROLES.ROWGROUP,
  td: () => ARIA_ROLES.CELL,
  template: () => null,
  textarea: () => ARIA_ROLES.TEXTBOX,
  tfoot: () => ARIA_ROLES.ROWGROUP,
  th: () => null,
  thead: () => ARIA_ROLES.ROWGROUP,
  time: () => ARIA_ROLES.TIME,
  title: () => null,
  tr: () => ARIA_ROLES.ROW,
  track: () => null,
  u: () => null,
  ul: () => ARIA_ROLES.LIST,
  var: () => null,
  video: () => null,
  wbr: () => null,
};

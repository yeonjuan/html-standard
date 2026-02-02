import { ROLES } from "../../constants/roles";
import { ElementState } from "../../core";

/**
 * https://www.w3.org/TR/html-aria/
 */
export const IMPLICIT_ROLE: Record<
  string,
  (element: ElementState) => string | null
> = {
  a: (element) => (element.attributes.has("href") ? ROLES.LINK : ROLES.GENERIC),
  abbr: () => null,
  address: () => ROLES.GROUP,
  area: (element) =>
    element.attributes.has("href") ? ROLES.LINK : ROLES.GENERIC,
  article: () => ROLES.ARTICLE,
  aside: () => ROLES.COMPLEMENTARY,
  audio: () => null,
  b: () => ROLES.GENERIC,
  base: () => null,
  bdi: () => ROLES.GENERIC,
  bdo: () => ROLES.GENERIC,
  blockquote: () => ROLES.BLOCKQUOTE,
  body: () => ROLES.GENERIC,
  br: () => null,
  button: () => ROLES.BUTTON,
  canvas: () => null,
  caption: () => ROLES.CAPTION,
  cite: () => null,
  code: () => ROLES.CODE,
  col: () => null,
  colgroup: () => null,
  data: () => ROLES.GENERIC,
  datalist: () => ROLES.LISTBOX,
  dd: () => null,
  del: () => ROLES.DELETION,
  details: () => ROLES.GROUP,
  dfn: () => ROLES.TERM,
  dialog: () => ROLES.DIALOG,
  div: () => ROLES.GENERIC,
  dl: () => null,
  dt: () => null,
  em: () => ROLES.EMPHASIS,
  embed: () => null,
  fieldset: () => ROLES.GROUP,
  figcaption: () => null,
  figure: () => ROLES.FIGURE,
  footer: (element) => {
    const sectioningElements = ["article", "aside", "main", "nav", "section"];
    for (const ancestor of element.anceters()) {
      if (sectioningElements.includes(ancestor.name.toLowerCase())) {
        return ROLES.GENERIC;
      }
    }
    return ROLES.CONTENTINFO;
  },
  form: () => ROLES.FORM,
  h1: () => ROLES.HEADING,
  h2: () => ROLES.HEADING,
  h3: () => ROLES.HEADING,
  h4: () => ROLES.HEADING,
  h5: () => ROLES.HEADING,
  h6: () => ROLES.HEADING,
  head: () => null,
  header: () => null, // TODO: banner if not descendant of article/aside/main/nav/section, otherwise generic
  hgroup: () => ROLES.GROUP,
  hr: () => ROLES.SEPARATOR,
  html: () => ROLES.DOCUMENT,
  i: () => ROLES.GENERIC,
  iframe: () => null,
  img: (element) => {
    const alt = element.attributes.get("alt");
    if (alt === "") return null;
    return ROLES.IMG;
  },
  input: (element) => {
    const type = element.attributes.get("type") || "text";
    switch (type) {
      case "button":
      case "image":
      case "reset":
      case "submit":
        return ROLES.BUTTON;
      case "checkbox":
        return ROLES.CHECKBOX;
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
        return ROLES.TEXTBOX;
      case "number":
        return ROLES.SPINBUTTON;
      case "radio":
        return ROLES.RADIO;
      case "range":
        return ROLES.SLIDER;
      case "search":
        return ROLES.SEARCHBOX;
      default:
        return ROLES.TEXTBOX;
    }
  },
  ins: () => ROLES.INSERTION,
  kbd: () => null,
  label: () => null,
  legend: () => null,
  li: () => null, // TODO: listitem if child of ol/ul/menu, otherwise generic
  link: () => null,
  main: () => ROLES.MAIN,
  map: () => null,
  mark: () => null,
  menu: () => ROLES.LIST,
  meta: () => null,
  meter: () => ROLES.METER,
  nav: () => ROLES.NAVIGATION,
  noscript: () => null,
  object: () => null,
  ol: () => ROLES.LIST,
  optgroup: () => ROLES.GROUP,
  option: () => ROLES.OPTION,
  output: () => ROLES.STATUS,
  p: () => ROLES.PARAGRAPH,
  param: () => null,
  picture: () => null,
  pre: () => ROLES.GENERIC,
  progress: () => ROLES.PROGRESSBAR,
  q: () => ROLES.GENERIC,
  rp: () => null,
  rt: () => null,
  ruby: () => null,
  s: () => ROLES.DELETION,
  samp: () => ROLES.GENERIC,
  script: () => null,
  search: () => ROLES.SEARCH,
  section: () => null,
  select: (element) =>
    element.attributes.has("multiple") ? ROLES.LISTBOX : ROLES.COMBOBOX,
  slot: () => null,
  small: () => ROLES.GENERIC,
  span: () => ROLES.GENERIC,
  strong: () => ROLES.STRONG,
  style: () => null,
  sub: () => null,
  summary: () => ROLES.BUTTON,
  sup: () => null,
  svg: () => null,
  table: () => ROLES.TABLE,
  tbody: () => ROLES.ROWGROUP,
  td: () => ROLES.CELL,
  template: () => null,
  textarea: () => ROLES.TEXTBOX,
  tfoot: () => ROLES.ROWGROUP,
  th: () => null,
  thead: () => ROLES.ROWGROUP,
  time: () => ROLES.TIME,
  title: () => null,
  tr: () => ROLES.ROW,
  track: () => null,
  u: () => null,
  ul: () => ROLES.LIST,
  var: () => null,
  video: () => null,
  wbr: () => null,
};

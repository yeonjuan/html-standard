/**
 * @see html.spec.whatwg.org/#toc-semantics
 */

// The document element
export { html } from "./document/html";

// Document metadata
export { head } from "./document-metadata/head";
export { title } from "./document-metadata/title";
export { base } from "./document-metadata/base";
export { link } from "./document-metadata/link";
export { meta } from "./document-metadata/meta";
export { style } from "./document-metadata/style";

// Sections
export { body } from "./sections/body";
export { article } from "./sections/article";
export { section } from "./sections/section";
export { nav } from "./sections/nav";
export { aside } from "./sections/aside";
export { h1 } from "./sections/h1";
export { h2 } from "./sections/h2";
export { h3 } from "./sections/h3";
export { h4 } from "./sections/h4";
export { h5 } from "./sections/h5";
export { h6 } from "./sections/h6";
export { hrgroup } from "./sections/hrgroup";
export { header } from "./sections/header";
export { footer } from "./sections/footer";
export { address } from "./sections/address";

// Grouping content
export { p } from "./grouping-content/p";
export { hr } from "./grouping-content/hr";
export { pre } from "./grouping-content/pre";
export { blockquote } from "./grouping-content/blockquote";
export { ol } from "./grouping-content/ol";
export { ul } from "./grouping-content/ul";
export { menu } from "./grouping-content/menu";
export { li } from "./grouping-content/li";
export { dl } from "./grouping-content/dl";
export { dt } from "./grouping-content/dt";
export { dd } from "./grouping-content/dd";
export { figure } from "./grouping-content/figure";
export { figcaption } from "./grouping-content/figcaption";
export { main } from "./grouping-content/main";
export { search } from "./grouping-content/search";
export { div } from "./grouping-content/div";

// Text-level semantics
export { a } from "./text-level-semantics/a";
export { em } from "./text-level-semantics/em";
export { strong } from "./text-level-semantics/strong";
export { small } from "./text-level-semantics/small";
export { s } from "./text-level-semantics/s";
export { cite } from "./text-level-semantics/cite";
export { q } from "./text-level-semantics/q";
export { dfn } from "./text-level-semantics/dfn";
export { abbr } from "./text-level-semantics/abbr";
export { ruby } from "./text-level-semantics/ruby";
export { rt } from "./text-level-semantics/rt";
export { rp } from "./text-level-semantics/rp";
export { data } from "./text-level-semantics/data";
export { time } from "./text-level-semantics/time";
export { code } from "./text-level-semantics/code";
export { _var } from "./text-level-semantics/var";
export { samp } from "./text-level-semantics/samp";
export { kbd } from "./text-level-semantics/kbd";
export { sub } from "./text-level-semantics/sub";
export { sup } from "./text-level-semantics/sup";
export { i } from "./text-level-semantics/i";
export { b } from "./text-level-semantics/b";
export { u } from "./text-level-semantics/u";
export { mark } from "./text-level-semantics/mark";
export { bdi } from "./text-level-semantics/bdi";
export { bdo } from "./text-level-semantics/bdo";
export { span } from "./text-level-semantics/span";
export { br } from "./text-level-semantics/br";
export { wbr } from "./text-level-semantics/wbr";

// TODO
// 4.7 Edits
// 4.7.1 The ins element
// 4.7.2 The del element

// 4.8 Embedded content
// 4.8.1 The picture element
// 4.8.2 The source element
// 4.8.3 The img element
// 4.8.5 The iframe element
// 4.8.6 The embed element
// 4.8.7 The object element
// 4.8.8 The video element
// 4.8.9 The audio element
// 4.8.10 The track element
// 4.8.12 The map element
// 4.8.13 The area element

// 4.9 Tabular data
// 4.9.1 The table element
// 4.9.2 The caption element
// 4.9.3 The colgroup element
// 4.9.4 The col element
// 4.9.5 The tbody element
// 4.9.6 The thead element
// 4.9.7 The tfoot element
// 4.9.8 The tr element
// 4.9.9 The td element
// 4.9.10 The th element

// 4.10 Forms
// 4.10.3 The form element
// 4.10.4 The label element
// 4.10.5 The input element
// 4.10.6 The button element
// 4.10.7 The select element
// 4.10.8 The datalist element
// 4.10.9 The optgroup element
// 4.10.10 The option element
// 4.10.11 The textarea element
// 4.10.12 The output element
// 4.10.13 The progress element
// 4.10.14 The meter element
// 4.10.15 The fieldset element
// 4.10.16 The legend element

// 4.11 Interactive elements
// 4.11.1 The details element
// 4.11.2 The summary element
// 4.11.4 The dialog element

// 4.12 Scripting
// 4.12.1 The script element
// 4.12.2 The noscript element
// 4.12.3 The template element
// 4.12.4 The slot element
// 4.12.5 The canvas element

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

// Edits
export { ins } from "./edits/ins";
export { del } from "./edits/del";

// Embedded content
export { picture } from "./embedded-content/picture";
export { source } from "./embedded-content/source";
export { img } from "./embedded-content/img";
export { iframe } from "./embedded-content/iframe";
export { embed } from "./embedded-content/embed";
export { object } from "./embedded-content/object";
export { video } from "./embedded-content/video";
export { audio } from "./embedded-content/audio";
export { track } from "./embedded-content/track";
export { map } from "./embedded-content/map";
export { area } from "./embedded-content/area";

// Tabular data
export { table } from "./tabular-data/table";
export { caption } from "./tabular-data/caption";
export { colgroup } from "./tabular-data/colgroup";
export { col } from "./tabular-data/col";
export { tbody } from "./tabular-data/tbody";
export { thead } from "./tabular-data/thead";
export { tfoot } from "./tabular-data/tfoot";
export { tr } from "./tabular-data/tr";
export { td } from "./tabular-data/td";
export { th } from "./tabular-data/th";

// Forms
export { form } from "./forms/form";
export { label } from "./forms/label";
export { input } from "./forms/input";
export { button } from "./forms/button";
export { select } from "./forms/select";
export { datalist } from "./forms/datalist";
export { optgroup } from "./forms/optgroup";
export { option } from "./forms/option";
export { textarea } from "./forms/textarea";
export { output } from "./forms/output";
export { progress } from "./forms/progress";
export { meter } from "./forms/meter";
export { fieldset } from "./forms/fieldset";
export { legend } from "./forms/legend";

// Interactive elements
export { details } from "./interactive-elements/details";
export { summary } from "./interactive-elements/summary";
export { dialog } from "./interactive-elements/dialog";

// Scripting
export { script } from "./scripting/script";
export { noscript } from "./scripting/noscript";
export { template } from "./scripting/template";
export { slot } from "./scripting/slot";
export { canvas } from "./scripting/canvas";

import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server_UGlnaItR.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Giscus = createComponent(($$result, $$props, $$slots) => {
  const giscus = {
    repo: "nab-iak/nab-iak.github.io",
    repoId: "R_kgDOOalhfQ",
    category: "Q&A",
    categoryId: "DIC_kwDOOalhfc4CpQm6",
    mapping: "pathname",
    inputPosition: "top",
    theme: "preferred_color_scheme",
    lang: "en"
  };
  return renderTemplate(_a || (_a = __template(["", '<div id="giscus_container"> <script src="https://giscus.app/client.js"', "", "", "", "", "", "", "", "", ' crossorigin="anonymous" async>\n    <\/script> </div>'])), maybeRenderHead(), addAttribute(giscus.repo, "data-repo"), addAttribute(giscus.repoId, "data-repo-id"), addAttribute(giscus.category, "data-category"), addAttribute(giscus.categoryId, "data-category-id"), addAttribute(giscus.mapping, "data-mapping"), addAttribute("1" , "data-reactions-enabled"), addAttribute(giscus.inputPosition, "data-input-position"), addAttribute(giscus.theme, "data-theme"), addAttribute(giscus.lang, "data-lang"));
}, "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/comment/Giscus.astro", void 0);

const $$file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/comment/Giscus.astro";
const $$url = undefined;

export { $$Giscus as default, $$file as file, $$url as url };

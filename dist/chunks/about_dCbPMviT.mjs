import './_page_.fc700a69_CRz_761o.mjs';
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_UGlnaItR.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DChePjpq.mjs';
import { g as getEntry, r as renderEntry, i as i18n, I as I18nKey } from './content-utils_BjWPqt--.mjs';
import $$Markdown from './Markdown_DxkcN8aY.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutPost = await getEntry("spec", "about");
  if (!aboutPost) {
    throw new Error("About page content not found");
  }
  const { Content } = await renderEntry(aboutPost);
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.about), "description": i18n(I18nKey.about) }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full "> ${renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> </div> ` })}`;
}, "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/about.astro", void 0);

const $$file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
